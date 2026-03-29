#!/bin/bash
# Minecraft Bedrock .mcaddon 打包腳本

echo "打包 Minecraft Bedrock 附加包..."

# 檢查資料夾是否存在
if [ ! -d "behavior_pack" ] || [ ! -d "resource_pack" ]; then
    echo "錯誤：找不到 behavior_pack 或 resource_pack 資料夾"
    exit 1
fi

# 刪除舊的 .mcaddon 檔案（如果存在）
rm -f example.mcaddon

# 打包成 .mcaddon
zip -r example.mcaddon behavior_pack/ resource_pack/

if [ $? -eq 0 ]; then
    echo "成功創建 example.mcaddon"
    echo "檔案大小: $(du -h example.mcaddon | cut -f1)"
else
    echo "打包失敗"
    exit 1
fi

echo "完成！"