// Minecraft Bedrock Script API 範例：自訂命令
// 使用 /scriptevent example:teleport_home 傳送到家

import { world } from "@minecraft/server";

world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "example:teleport_home") {
    const player = event.sourceEntity;
    if (player) {
      // 假設家的位置是 (0, 100, 0)，實際使用中可以儲存玩家的家位置
      player.teleport({ x: 0, y: 100, z: 0 });
      player.sendMessage("已傳送到家！");
    }
  }
});

// 另一個範例：給予隨機物品
world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "example:random_item") {
    const player = event.sourceEntity;
    if (player) {
      const items = ["minecraft:diamond", "minecraft:iron_ingot", "minecraft:gold_ingot"];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const inventory = player.getComponent("minecraft:inventory");
      const itemStack = new ItemStack(randomItem, 1);
      inventory.container.addItem(itemStack);
      player.sendMessage(`獲得了 ${randomItem}！`);
    }
  }
});

// 新增：給予原廠物品
world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "example:give_vanilla_items") {
    const player = event.sourceEntity;
    if (player) {
      const inventory = player.getComponent("minecraft:inventory");
      // 給予一些原廠物品
      const itemsToGive = [
        { item: "minecraft:diamond_sword", count: 1 },
        { item: "minecraft:bow", count: 1 },
        { item: "minecraft:apple", count: 10 },
        { item: "minecraft:diamond", count: 5 }
      ];
      itemsToGive.forEach(({ item, count }) => {
        const itemStack = new ItemStack(item, count);
        inventory.container.addItem(itemStack);
      });
      player.sendMessage("獲得了原廠物品套組！");
    }
  }
});