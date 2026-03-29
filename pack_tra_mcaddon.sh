#!/bin/bash
# TRA Immersive .mcaddon 打包腳本

echo "打包 TRA Immersive 附加包..."

# 檢查資料夾是否存在
if [ ! -d "tra_behavior_pack" ] || [ ! -d "tra_resource_pack" ]; then
    echo "錯誤：找不到 tra_behavior_pack 或 tra_resource_pack 資料夾"
    exit 1
fi

# 刪除舊的 .mcaddon 檔案（如果存在）
rm -f tra_immersive.mcaddon

# 打包成 .mcaddon
zip -r tra_immersive.mcaddon tra_behavior_pack/ tra_resource_pack/

if [ $? -eq 0 ]; then
    echo "成功創建 tra_immersive.mcaddon"
    echo "檔案大小: $(du -h tra_immersive.mcaddon | cut -f1)"
else
    echo "打包失敗"
    exit 1
fi

echo "完成！"