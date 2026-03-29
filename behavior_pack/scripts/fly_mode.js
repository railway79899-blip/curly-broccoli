// Minecraft Bedrock Script API 範例：模組功能 - 飛行模式
// 使用 /scriptevent example:toggle_fly 切換飛行模式

import { world } from "@minecraft/server";

const flyingPlayers = new Set();

world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "example:toggle_fly") {
    const player = event.sourceEntity;
    if (player) {
      if (flyingPlayers.has(player.id)) {
        flyingPlayers.delete(player.id);
        player.sendMessage("飛行模式已關閉");
      } else {
        flyingPlayers.add(player.id);
        player.sendMessage("飛行模式已開啟");
      }
    }
  }
});

// 每 tick 檢查飛行玩家
world.afterEvents.worldInitialize.subscribe(() => {
  world.afterEvents.entityTick.subscribe((event) => {
    if (event.entity.typeId === "minecraft:player" && flyingPlayers.has(event.entity.id)) {
      // 簡單飛行邏輯：如果玩家在空中，給予向上推力
      if (!event.entity.isOnGround) {
        event.entity.applyImpulse({ x: 0, y: 0.1, z: 0 });
      }
    }
  });
});