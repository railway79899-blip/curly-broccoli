// Minecraft Bedrock Script API 範例：簡單建築生成器
// 使用 /scriptevent example:build_house 來生成一個簡單的房子

import { world, BlockPermutation } from "@minecraft/server";

world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "example:build_house") {
    const player = event.sourceEntity;
    if (player) {
      buildSimpleHouse(player.location);
      player.sendMessage("房子已生成！");
    }
  }
});

function buildSimpleHouse(location) {
  const { x, y, z } = location;

  // 地板 (5x5)
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      world.setBlockPermutation(BlockPermutation.resolve("minecraft:planks"), { x: x + i, y: y, z: z + j });
    }
  }

  // 牆壁 (高度 3)
  for (let height = 1; height <= 3; height++) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
          world.setBlockPermutation(BlockPermutation.resolve("minecraft:cobblestone"), { x: x + i, y: y + height, z: z + j });
        }
      }
    }
  }

  // 屋頂
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      world.setBlockPermutation(BlockPermutation.resolve("minecraft:wood"), { x: x + i, y: y + 4, z: z + j });
    }
  }

  // 門
  world.setBlockPermutation(BlockPermutation.resolve("minecraft:air"), { x: x + 2, y: y + 1, z: z });
  world.setBlockPermutation(BlockPermutation.resolve("minecraft:air"), { x: x + 2, y: y + 2, z: z });
}