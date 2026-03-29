// TRA Immersive Script API 範例
// 模擬台灣鐵路系統

import { world, BlockPermutation } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
  console.log("TRA Immersive Addon loaded!");
});

// 火車站生成
world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "tra:build_station") {
    const player = event.sourceEntity;
    if (player) {
      buildTrainStation(player.location);
      player.sendMessage("火車站已生成！");
    }
  }
});

function buildTrainStation(location) {
  const { x, y, z } = location;

  // 簡單的火車站結構
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // 地板
      world.setBlockPermutation(BlockPermutation.resolve("minecraft:stone"), { x: x + i, y: y, z: z + j });
      // 牆壁
      if (i === 0 || i === 9 || j === 0 || j === 9) {
        world.setBlockPermutation(BlockPermutation.resolve("minecraft:brick_block"), { x: x + i, y: y + 1, z: z + j });
        world.setBlockPermutation(BlockPermutation.resolve("minecraft:brick_block"), { x: x + i, y: y + 2, z: z + j });
      }
    }
  }

  // 鐵軌
  for (let i = -5; i < 15; i++) {
    world.setBlockPermutation(BlockPermutation.resolve("minecraft:rail"), { x: x + i, y: y, z: z + 5 });
  }
}

// 火車時刻表
world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "tra:schedule") {
    const player = event.sourceEntity;
    if (player) {
      player.sendMessage("=== TRA 時刻表 ===");
      player.sendMessage("台北 -> 高雄: 每小時發車");
      player.sendMessage("高雄 -> 台北: 每小時發車");
      player.sendMessage("使用 /scriptevent tra:summon_train 召喚火車");
    }
  }
});

// 召喚火車
world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "tra:summon_train") {
    const player = event.sourceEntity;
    if (player) {
      const train = player.dimension.spawnEntity("tra:train", player.location);
      player.sendMessage("火車已召喚！");
    }
  }
});