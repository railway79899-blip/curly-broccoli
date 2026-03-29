# Minecraft PE 程式碼範例

這是一個簡單的 Minecraft Bedrock Edition 附加包範例，包含行為包和資源包。

## 結構
- `behavior_pack/`: 行為包，定義遊戲邏輯
  - `manifest.json`: 包資訊
  - `items/custom_sword.json`: 自訂物品 (自訂劍)
  - `items/diamond_sword_override.json`: 修改原廠鑽石劍
  - `items/bow_override.json`: 修改原廠弓
  - `items/apple_override.json`: 修改原廠蘋果
  - `entities/custom_mob.json`: 自訂實體 (自訂怪物)
  - `loot_tables/entities/custom_mob.json`: 戰利品表
  - `scripts/main.js`: 基本 JavaScript 腳本
  - `scripts/build_house.js`: 建築生成器腳本
  - `scripts/custom_commands.js`: 自訂命令腳本
  - `scripts/fly_mode.js`: 飛行模式模組

- `resource_pack/`: 資源包，定義外觀
  - `manifest.json`: 包資訊
  - `textures/item_texture.json`: 物品材質定義
  - `ui/example_buttons.json`: 自訂按鈕 UI
  - `ui/main_screen.json`: 主畫面自訂
  - `textures/ui/readme.txt`: UI 材質說明

- `tra_behavior_pack/`: TRA 沉浸式行為包
  - `manifest.json`: 包資訊
  - `entities/train.json`: 火車實體
  - `items/ticket.json`: 車票物品
  - `scripts/tra_main.js`: TRA 腳本

- `tra_resource_pack/`: TRA 沉浸式資源包
  - `manifest.json`: 包資訊
  - `textures/item_texture.json`: 物品材質
  - `textures/entity_texture.json`: 實體材質

- `pack_mcaddon.sh`: 打包腳本，用於生成 .mcaddon 檔案
- `pack_tra_mcaddon.sh`: TRA 打包腳本
- `example.mcaddon`: 打包後的附加包檔案
- `tra_immersive.mcaddon`: TRA 打包後的附加包檔案

## 如何使用
1. 將這些檔案複製到 Minecraft 的行為包和資源包資料夾中，或直接匯入 .mcaddon 檔案。
2. 在遊戲中啟用附加包。
3. 使用 `/give @s example:custom_sword` 獲取自訂劍。
4. 使用 `/summon example:custom_mob` 生成自訂怪物。
5. 使用 `/scriptevent example:build_house` 生成房子。
6. 使用 `/scriptevent example:teleport_home` 傳送到家。
7. 使用 `/scriptevent example:random_item` 獲取隨機物品。
8. 使用 `/scriptevent example:toggle_fly` 切換飛行模式。
9. 使用 `/scriptevent example:give_vanilla_items` 獲取原廠物品套組。

## TRA 沉浸式模組
- 使用 `/scriptevent tra:build_station` 生成火車站。
- 使用 `/scriptevent tra:schedule` 查看時刻表。
- 使用 `/scriptevent tra:summon_train` 召喚火車。
- 使用 `/give @s tra:ticket` 獲取車票。

## 打包 .mcaddon
執行 `./pack_mcaddon.sh` 來重新打包附加包成 .mcaddon 檔案。
執行 `./pack_tra_mcaddon.sh` 來打包 TRA 模組。

注意：這是基本範例，實際使用需要調整 UUID 和添加真正的材質檔案。腳本需要啟用實驗性功能。UI 自訂需要相應的 PNG 材質檔案。