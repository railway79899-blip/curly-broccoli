// Example JavaScript for Minecraft Bedrock
// This is a simple script that logs when the world loads

import { world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
  console.log("World initialized!");
});

// Example function to give player an item
function giveItem(player) {
  const inventory = player.getComponent("minecraft:inventory");
  const item = new ItemStack("example:custom_sword", 1);
  inventory.container.addItem(item);
}

// Export for use in other scripts
export { giveItem };