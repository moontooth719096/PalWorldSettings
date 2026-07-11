const FIELD_DEFINITIONS = {
      Difficulty: { label: "難度", type: "enum", group: "世界", options: ["None", "Easy", "Normal", "Hard"] },
      DayTimeSpeedRate: { label: "白天時間速度", type: "number", step: "0.1", group: "世界" },
      NightTimeSpeedRate: { label: "夜晚時間速度", type: "number", step: "0.1", group: "世界" },
      ExpRate: { label: "經驗倍率", type: "number", step: "0.1", group: "成長與掉落" },
      PalCaptureRate: { label: "帕魯捕獲倍率", type: "number", step: "0.1", group: "成長與掉落" },
      PalSpawnNumRate: { label: "帕魯生成倍率", type: "number", step: "0.1", group: "成長與掉落" },
      PalDamageRateAttack: { label: "帕魯攻擊倍率", type: "number", step: "0.1", group: "戰鬥" },
      PalDamageRateDefense: { label: "帕魯防禦倍率", type: "number", step: "0.1", group: "戰鬥" },
      PlayerDamageRateAttack: { label: "玩家攻擊倍率", type: "number", step: "0.1", group: "戰鬥" },
      PlayerDamageRateDefense: { label: "玩家防禦倍率", type: "number", step: "0.1", group: "戰鬥" },
      PlayerStomachDecreaceRate: { label: "玩家飽食下降倍率", type: "number", step: "0.1", group: "玩家" },
      PlayerStaminaDecreaceRate: { label: "玩家耐力下降倍率", type: "number", step: "0.1", group: "玩家" },
      PlayerAutoHPRegeneRate: { label: "玩家自動回血倍率", type: "number", step: "0.1", group: "玩家" },
      PlayerAutoHpRegeneRateInSleep: { label: "玩家睡眠回血倍率", type: "number", step: "0.1", group: "玩家" },
      PalStomachDecreaceRate: { label: "帕魯飽食下降倍率", type: "number", step: "0.1", group: "帕魯" },
      PalStaminaDecreaceRate: { label: "帕魯耐力下降倍率", type: "number", step: "0.1", group: "帕魯" },
      PalAutoHPRegeneRate: { label: "帕魯自動回血倍率", type: "number", step: "0.1", group: "帕魯" },
      PalAutoHpRegeneRateInSleep: { label: "帕魯睡眠回血倍率", type: "number", step: "0.1", group: "帕魯" },
      BuildObjectDamageRate: { label: "建築受損倍率", type: "number", step: "0.1", group: "建築與採集" },
      BuildObjectDeteriorationDamageRate: { label: "建築自然損壞倍率", type: "number", step: "0.1", group: "建築與採集" },
      CollectionDropRate: { label: "採集掉落倍率", type: "number", step: "0.1", group: "建築與採集" },
      CollectionObjectHpRate: { label: "採集物件耐久倍率", type: "number", step: "0.1", group: "建築與採集" },
      CollectionObjectRespawnSpeedRate: { label: "採集物件重生速度", type: "number", step: "0.1", group: "建築與採集" },
      EnemyDropItemRate: { label: "敵人掉落倍率", type: "number", step: "0.1", group: "成長與掉落" },
      DeathPenalty: { label: "死亡懲罰", type: "enum", group: "世界", options: ["None", "Item", "ItemAndEquipment", "All"] },
      bEnablePlayerToPlayerDamage: { label: "玩家互傷", type: "boolean", group: "多人與 PvP" },
      bEnableFriendlyFire: { label: "友軍傷害", type: "boolean", group: "多人與 PvP" },
      bEnableInvaderEnemy: { label: "是否有襲擊事件", type: "boolean", group: "世界" },
      bActiveUNKO: { label: "啟用 UNKO 參數", type: "boolean", group: "世界" },
      bEnableAimAssistPad: { label: "手把輔助瞄準", type: "boolean", group: "玩家" },
      bEnableAimAssistKeyboard: { label: "鍵鼠輔助瞄準", type: "boolean", group: "玩家" },
      DropItemMaxNum: { label: "地面掉落物上限", type: "integer", group: "建築與採集" },
      DropItemMaxNum_UNKO: { label: "UNKO 掉落物上限", type: "integer", group: "建築與採集" },
      BaseCampMaxNum: { label: "據點上限", type: "integer", group: "基地與公會" },
      BaseCampWorkerMaxNum: { label: "單據點工作帕魯上限", type: "integer", group: "基地與公會" },
      DropItemAliveMaxHours: { label: "掉落物存活時數", type: "number", step: "0.1", group: "建築與採集" },
      bAutoResetGuildNoOnlinePlayers: { label: "離線自動重置公會", type: "boolean", group: "基地與公會" },
      AutoResetGuildTimeNoOnlinePlayers: { label: "公會重置等待小時", type: "number", step: "1", group: "基地與公會" },
      GuildPlayerMaxNum: { label: "公會人數上限", type: "integer", group: "基地與公會" },
      PalEggDefaultHatchingTime: { label: "帕魯蛋孵化時間", type: "number", step: "0.1", group: "帕魯" },
      WorkSpeedRate: { label: "工作速度倍率", type: "number", step: "0.1", group: "基地與公會" },
      bIsMultiplay: { label: "多人模式", type: "boolean", group: "多人與 PvP" },
      bIsPvP: { label: "PvP 模式", type: "boolean", group: "多人與 PvP" },
      bCanPickupOtherGuildDeathPenaltyDrop: { label: "可撿其他公會死亡掉落", type: "boolean", group: "多人與 PvP" },
      bEnableNonLoginPenalty: { label: "離線懲罰", type: "boolean", group: "多人與 PvP" },
      bEnableFastTravel: { label: "快速旅行", type: "boolean", group: "世界" },
      bIsStartLocationSelectByMap: { label: "地圖選擇出生點", type: "boolean", group: "世界" },
      bExistPlayerAfterLogout: { label: "登出後角色留在世界", type: "boolean", group: "多人與 PvP" },
      bEnableDefenseOtherGuildPlayer: { label: "可防禦其他公會玩家", type: "boolean", group: "多人與 PvP" },
      CoopPlayerMaxNum: { label: "合作人數上限", type: "integer", group: "伺服器" },
      ServerPlayerMaxNum: { label: "伺服器人數上限", type: "integer", group: "伺服器" },
      ServerName: { label: "伺服器名稱", type: "string", group: "伺服器" },
      ServerDescription: { label: "伺服器描述", type: "string", group: "伺服器" },
      AdminPassword: { label: "管理員密碼", type: "string", group: "伺服器" },
      ServerPassword: { label: "伺服器密碼", type: "string", group: "伺服器" },
      PublicPort: { label: "公開連線埠", type: "integer", group: "伺服器" },
      PublicIP: { label: "公開 IP", type: "string", group: "伺服器" },
      RCONEnabled: { label: "啟用 RCON", type: "boolean", group: "伺服器" },
      RCONPort: { label: "RCON 連線埠", type: "integer", group: "伺服器" },
      Region: { label: "區域", type: "string", group: "伺服器" },
      bUseAuth: { label: "啟用驗證", type: "boolean", group: "伺服器" },
      BanListURL: { label: "封鎖清單網址", type: "string", group: "伺服器" },
      RandomizerType: { label: "隨機化類型", type: "string", group: "世界", options: ["None", "Region", "All"] },
      RandomizerSeed: { label: "隨機種子", type: "string", group: "世界" },
      bIsRandomizerPalLevelRandom: { label: "帕魯等級隨機化", type: "boolean", group: "世界" },
      BuildObjectHpRate: { label: "建築耐久倍率", type: "number", step: "0.1", group: "建築與採集" },
      PhysicsActiveDropItemMaxNum: { label: "物理掉落物上限", type: "integer", group: "建築與採集" },
      BaseCampMaxNumInGuild: { label: "每公會據點上限", type: "integer", group: "基地與公會" },
      AutoSaveSpan: { label: "自動存檔間隔", type: "number", step: "1", group: "伺服器" },
      bHardcore: { label: "Hardcore 模式", type: "boolean", group: "世界" },
      bPalLost: { label: "死亡遺失帕魯", type: "boolean", group: "世界" },
      bCharacterRecreateInHardcore: { label: "Hardcore 死亡後重建角色", type: "boolean", group: "世界" },
      bEnableFastTravelOnlyBaseCamp: { label: "僅限基地快速旅行", type: "boolean", group: "世界" },
      bInvisibleOtherGuildBaseCampAreaFX: { label: "隱藏其他公會基地範圍特效", type: "boolean", group: "多人與 PvP" },
      bBuildAreaLimit: { label: "啟用建造區域限制", type: "boolean", group: "建築與採集" },
      ItemWeightRate: { label: "物品重量倍率", type: "number", step: "0.1", group: "玩家" },
      bAllowClientMod: { label: "允許客戶端模組", type: "boolean", group: "伺服器" },
      RESTAPIEnabled: { label: "啟用 REST API", type: "boolean", group: "伺服器" },
      RESTAPIPort: { label: "REST API 連接埠", type: "integer", group: "伺服器" },
      bShowPlayerList: { label: "顯示玩家列表", type: "boolean", group: "伺服器" },
      ChatPostLimitPerMinute: { label: "每分鐘聊天發言上限", type: "integer", group: "伺服器" },
      CrossplayPlatforms: { label: "跨平台平台清單", type: "string-unquoted", group: "伺服器" },
      bIsUseBackupSaveData: { label: "啟用備份存檔", type: "boolean", group: "伺服器" },
      LogFormatType: { label: "日誌格式類型", type: "string-unquoted", group: "伺服器", options: ["Text", "Json"] },
      bIsShowJoinLeftMessage: { label: "顯示加入離開訊息", type: "boolean", group: "多人與 PvP" },
      SupplyDropSpan: { label: "空投間隔", type: "integer", group: "世界" },
      EnablePredatorBossPal: { label: "啟用掠食者 Boss 帕魯", type: "boolean", group: "世界" },
      MaxBuildingLimitNum: { label: "最大建築數量", type: "integer", group: "建築與採集" },
      ServerReplicatePawnCullDistance: { label: "角色同步裁切距離", type: "number", step: "1", group: "伺服器" },
      bAllowGlobalPalboxExport: { label: "允許全域 Palbox 匯出", type: "boolean", group: "帕魯" },
      bAllowGlobalPalboxImport: { label: "允許全域 Palbox 匯入", type: "boolean", group: "帕魯" },
      EquipmentDurabilityDamageRate: { label: "裝備耐久損耗倍率", type: "number", step: "0.1", group: "玩家" },
      ItemContainerForceMarkDirtyInterval: { label: "容器強制更新間隔", type: "number", step: "0.1", group: "伺服器" },
      PlayerDataPalStorageUpdateCheckTickInterval: { label: "玩家帕魯倉更新檢查間隔", type: "number", step: "0.1", group: "伺服器", description: "檢查玩家帕魯倉資料更新的時間間隔。" },
      ItemCorruptionMultiplier: { label: "物品損毀倍率", type: "number", step: "0.1", group: "玩家" },
      MonsterFarmActionSpeedRate: { label: "牧場行動速度倍率", type: "number", step: "0.1", group: "基地與公會" },
      DenyTechnologyList: { label: "禁用科技清單", type: "string-unquoted", group: "世界" },
      GuildRejoinCooldownMinutes: { label: "公會重加入冷卻分鐘", type: "integer", group: "基地與公會" },
      AutoTransferMasterCheckIntervalSeconds: { label: "自動轉移會長檢查間隔秒數", type: "number", step: "1", group: "基地與公會" },
      AutoTransferMasterThresholdDays: { label: "自動轉移會長門檻天數", type: "integer", group: "基地與公會" },
      MaxGuildsPerFrame: { label: "每幀最大處理公會數", type: "integer", group: "基地與公會" },
      BlockRespawnTime: { label: "區塊重生時間", type: "number", step: "0.1", group: "世界" },
      RespawnPenaltyDurationThreshold: { label: "重生懲罰持續門檻", type: "number", step: "0.1", group: "世界" },
      RespawnPenaltyTimeScale: { label: "重生懲罰時間倍率", type: "number", step: "0.1", group: "世界" },
      bDisplayPvPItemNumOnWorldMap_BaseCamp: { label: "地圖顯示基地 PvP 物品數量", type: "boolean", group: "多人與 PvP" },
      bDisplayPvPItemNumOnWorldMap_Player: { label: "地圖顯示玩家 PvP 物品數量", type: "boolean", group: "多人與 PvP" },
      AdditionalDropItemWhenPlayerKillingInPvPMode: { label: "PvP 擊殺額外掉落物", type: "string", group: "多人與 PvP" },
      AdditionalDropItemNumWhenPlayerKillingInPvPMode: { label: "PvP 擊殺額外掉落數量", type: "integer", group: "多人與 PvP" },
      bAdditionalDropItemWhenPlayerKillingInPvPMode: { label: "啟用 PvP 擊殺額外掉落", type: "boolean", group: "多人與 PvP" },
      bEnableVoiceChat: { label: "啟用語音聊天", type: "boolean", group: "多人與 PvP" },
      VoiceChatMaxVolumeDistance: { label: "語音最大音量距離", type: "number", step: "1", group: "多人與 PvP" },
      VoiceChatZeroVolumeDistance: { label: "語音靜音距離", type: "number", step: "1", group: "多人與 PvP" },
      bAllowEnhanceStat_Health: { label: "允許強化生命", type: "boolean", group: "玩家" },
      bAllowEnhanceStat_Attack: { label: "允許強化攻擊", type: "boolean", group: "玩家" },
      bAllowEnhanceStat_Stamina: { label: "允許強化耐力", type: "boolean", group: "玩家" },
      bAllowEnhanceStat_Weight: { label: "允許強化負重", type: "boolean", group: "玩家" },
      bAllowEnhanceStat_WorkSpeed: { label: "允許強化工作速度", type: "boolean", group: "玩家" },
      bEnableBuildingPlayerUIdDisplay: { label: "顯示建築玩家 UID", type: "boolean", group: "多人與 PvP" },
      BuildingNameDisplayCacheTTLSeconds: { label: "建築名稱顯示快取秒數", type: "integer", group: "多人與 PvP" }
    };

    const FIELD_DESCRIPTIONS = {
      Difficulty: "世界難度設定。",
      RandomizerType: "帕魯生成隨機化模式。None 為不隨機，Region 為區域隨機，All 為完全隨機。",
      RandomizerSeed: "啟用帕魯生成隨機化時使用的種子值。",
      bIsRandomizerPalLevelRandom: "啟用後，野生帕魯等級將完全隨機；關閉時會在區域設計範圍內隨機。",
      DayTimeSpeedRate: "白天時間流逝速度。",
      NightTimeSpeedRate: "夜晚時間流逝速度。",
      ExpRate: "玩家獲得經驗值倍率。",
      PalCaptureRate: "捕獲帕魯的成功率倍率。",
      PalSpawnNumRate: "帕魯生成數量倍率，會影響效能。",
      PalDamageRateAttack: "帕魯造成的傷害倍率。",
      PalDamageRateDefense: "帕魯承受的傷害倍率。",
      PlayerDamageRateAttack: "玩家造成的傷害倍率。",
      PlayerDamageRateDefense: "玩家承受的傷害倍率。",
      PlayerStomachDecreaceRate: "玩家飢餓消耗速度倍率。",
      PlayerStaminaDecreaceRate: "玩家耐力消耗速度倍率。",
      PlayerAutoHPRegeneRate: "玩家自然回血倍率。",
      PlayerAutoHpRegeneRateInSleep: "玩家睡眠時回血倍率。",
      PalStomachDecreaceRate: "帕魯飢餓消耗速度倍率。",
      PalStaminaDecreaceRate: "帕魯耐力消耗速度倍率。",
      PalAutoHPRegeneRate: "帕魯自然回血倍率。",
      PalAutoHpRegeneRateInSleep: "帕魯在 Palbox 睡眠時回血倍率。",
      BuildObjectHpRate: "建築耐久值倍率。",
      BuildObjectDamageRate: "建築受到傷害的倍率。",
      BuildObjectDeteriorationDamageRate: "建築自然劣化或腐朽速度倍率。",
      CollectionDropRate: "採集物掉落數量倍率。",
      CollectionObjectHpRate: "採集物件耐久倍率。",
      CollectionObjectRespawnSpeedRate: "採集物件重生間隔倍率。",
      EnemyDropItemRate: "敵人掉落物數量倍率。",
      DeathPenalty: "角色死亡時的掉落懲罰設定。",
      bEnablePlayerToPlayerDamage: "是否允許玩家之間互相造成傷害。",
      bEnableFriendlyFire: "是否允許友軍傷害。",
      bEnableInvaderEnemy: "是否啟用入侵事件。",
      bActiveUNKO: "是否啟用 UNKO 相關設定。",
      bEnableAimAssistPad: "是否在手把操作時啟用輔助瞄準。",
      bEnableAimAssistKeyboard: "是否在鍵盤滑鼠操作時啟用輔助瞄準。",
      DropItemMaxNum: "世界上可存在的掉落物總數上限。",
      PhysicsActiveDropItemMaxNum: "可啟用物理效果的掉落物數量上限。",
      DropItemMaxNum_UNKO: "UNKO 類掉落物的數量上限。",
      BaseCampMaxNum: "伺服器內所有據點的總數上限。",
      BaseCampWorkerMaxNum: "每個據點可工作的帕魯數量上限，最多 50。",
      DropItemAliveMaxHours: "掉落物在世界中保留的最長時間（小時）。",
      bAutoResetGuildNoOnlinePlayers: "當公會成員長時間未登入時，自動刪除建築與基地帕魯。",
      AutoResetGuildTimeNoOnlinePlayers: "觸發自動重置前，公會無人上線需持續的時間。",
      GuildPlayerMaxNum: "公會可加入的玩家數量上限。",
      BaseCampMaxNumInGuild: "每個公會可擁有的據點上限，預設 4，最高 10。",
      PalEggDefaultHatchingTime: "巨大帕魯蛋的孵化時間（小時），其他蛋也會一併受影響。",
      WorkSpeedRate: "工作速度倍率。",
      AutoSaveSpan: "自動存檔間隔。",
      bIsMultiplay: "是否啟用多人模式。",
      bIsPvP: "是否啟用 PvP。",
      bHardcore: "是否啟用 Hardcore 模式，死亡後不可重生。",
      bPalLost: "玩家死亡時是否永久失去隨隊帕魯。",
      bCharacterRecreateInHardcore: "在 Hardcore 模式死亡後是否允許重建角色。",
      bCanPickupOtherGuildDeathPenaltyDrop: "是否可拾取其他公會玩家死亡懲罰掉落物。",
      bEnableNonLoginPenalty: "是否啟用離線懲罰。",
      bEnableFastTravel: "是否啟用快速旅行。",
      bEnableFastTravelOnlyBaseCamp: "是否限制只能在基地之間快速旅行。",
      bIsStartLocationSelectByMap: "是否允許玩家透過地圖選擇初始位置。",
      bExistPlayerAfterLogout: "玩家登出後是否在原地以睡眠狀態留在世界中。",
      bEnableDefenseOtherGuildPlayer: "是否可防禦或攻擊其他公會玩家。",
      bInvisibleOtherGuildBaseCampAreaFX: "是否顯示其他公會基地範圍邊界特效。",
      bBuildAreaLimit: "是否禁止在某些設施附近建造，例如快速旅行點。",
      ItemWeightRate: "物品重量倍率。",
      CoopPlayerMaxNum: "單一合作隊伍可加入的人數上限。",
      ServerPlayerMaxNum: "伺服器可加入的玩家總數上限。",
      ServerName: "伺服器名稱。",
      ServerDescription: "伺服器描述文字。",
      AdminPassword: "用於取得管理員權限的密碼。",
      ServerPassword: "玩家登入伺服器所需的密碼。",
      bAllowClientMod: "是否允許啟用模組的玩家加入伺服器。",
      PublicPort: "對外公開的連線埠，不會改變實際監聽埠。",
      PublicIP: "手動指定對外顯示的公網 IP。",
      RCONEnabled: "是否啟用 RCON 遠端管理。",
      RCONPort: "RCON 使用的連線埠。",
      Region: "伺服器區域資訊。",
      bUseAuth: "是否啟用驗證機制。",
      BanListURL: "封鎖名單網址。",
      RESTAPIEnabled: "是否啟用 REST API。",
      RESTAPIPort: "REST API 的監聽連線埠。",
      bShowPlayerList: "是否在 ESC 選單中顯示玩家列表。",
      ChatPostLimitPerMinute: "每分鐘允許發送的聊天訊息數量上限。",
      CrossplayPlatforms: "允許連線到伺服器的平台清單。",
      bIsUseBackupSaveData: "是否啟用世界備份；啟用後會增加磁碟負載。",
      LogFormatType: "伺服器日誌格式，可為 Text 或 Json。",
      bIsShowJoinLeftMessage: "是否在專用伺服器中顯示玩家加入與離開訊息。",
      SupplyDropSpan: "隕石或補給空投事件的間隔時間（分鐘）。",
      EnablePredatorBossPal: "是否啟用掠食者 Boss 帕魯。",
      MaxBuildingLimitNum: "每位玩家的建築數量上限，0 代表無上限。",
      ServerReplicatePawnCullDistance: "與玩家同步帕魯的距離（公分），範圍 5000 到 15000。",
      bAllowGlobalPalboxExport: "是否允許將資料儲存到 Global Palbox。",
      bAllowGlobalPalboxImport: "是否允許從 Global Palbox 載入資料。",
      EquipmentDurabilityDamageRate: "裝備耐久度損耗倍率。",
      ItemContainerForceMarkDirtyInterval: "容器介面開啟時，強制重新同步的時間間隔（秒）。",
      PlayerDataPalStorageUpdateCheckTickInterval: "檢查玩家帕魯倉資料更新的時間間隔。",
      ItemCorruptionMultiplier: "物品腐化或損毀速度倍率。",
      MonsterFarmActionSpeedRate: "放牧生產物品的速度倍率。",
      DenyTechnologyList: "停用特定科技的 ID 清單。",
      GuildRejoinCooldownMinutes: "重新加入公會所需等待的冷卻時間（分鐘）。",
      AutoTransferMasterCheckIntervalSeconds: "自動轉移公會會長前的檢查間隔（秒）。",
      AutoTransferMasterThresholdDays: "觸發自動轉移會長所需的離線天數。",
      MaxGuildsPerFrame: "每一幀最大處理的公會數量。",
      BlockRespawnTime: "玩家死亡後再次重生前的冷卻秒數。",
      RespawnPenaltyDurationThreshold: "套用重生冷卻倍率前，需要滿足的生存時間門檻（秒）。",
      RespawnPenaltyTimeScale: "套用在重生冷卻上的時間倍率。",
      bDisplayPvPItemNumOnWorldMap_BaseCamp: "是否在地圖上顯示各基地的 PvP 專用物品數量。",
      bDisplayPvPItemNumOnWorldMap_Player: "是否在地圖上顯示玩家位置與 PvP 專用物品數量。",
      AdditionalDropItemWhenPlayerKillingInPvPMode: "啟用 PvP 擊殺額外掉落時，要掉落的物品 ID。",
      AdditionalDropItemNumWhenPlayerKillingInPvPMode: "啟用 PvP 擊殺額外掉落時，要掉落的物品數量。",
      bAdditionalDropItemWhenPlayerKillingInPvPMode: "是否在 PvP 擊殺玩家時掉落特殊物品。",
      bEnableVoiceChat: "是否啟用遊戲內語音聊天。",
      VoiceChatMaxVolumeDistance: "語音聊天音量不衰減的距離。",
      VoiceChatZeroVolumeDistance: "語音聊天音量衰減至零的距離。",
      bAllowEnhanceStat_Health: "是否允許把能力點配置到生命值。",
      bAllowEnhanceStat_Attack: "是否允許把能力點配置到攻擊力。",
      bAllowEnhanceStat_Stamina: "是否允許把能力點配置到耐力。",
      bAllowEnhanceStat_Weight: "是否允許把能力點配置到負重。",
      bAllowEnhanceStat_WorkSpeed: "是否允許把能力點配置到工作速度。",
      bEnableBuildingPlayerUIdDisplay: "是否在建築上顯示建造者的玩家 ID。",
      BuildingNameDisplayCacheTTLSeconds: "建築名稱顯示快取保留時間（秒）。"
    };

    const GROUP_DESCRIPTIONS = {
      "世界": "時間、難度、死亡懲罰與世界機制。",
      "成長與掉落": "經驗、捕獲、生成與物資掉落相關倍率。",
      "戰鬥": "玩家與帕魯的攻防倍率。",
      "玩家": "玩家飽食、耐力、回復與操作輔助。",
      "帕魯": "帕魯的生存、耐力與孵化速度。",
      "建築與採集": "建築耐久、掉落物與資源重生。",
      "基地與公會": "據點、公會與工作效率。",
      "多人與 PvP": "多人互動、PvP 與登出相關行為。",
      "伺服器": "名稱、密碼、連線埠、RCON 與公開設定。",
      "其他": "未預先分類但仍可直接編輯的欄位。"
    };

    const GROUP_ORDER = ["世界", "成長與掉落", "戰鬥", "玩家", "帕魯", "建築與採集", "基地與公會", "多人與 PvP", "伺服器", "其他"];

    const state = {
      header: "[/Script/Pal.PalGameWorldSettings]",
      entries: [],
      search: ""
    };

    let autoParseTimer = null;

    const elements = {
      rawInput: document.getElementById("rawInput"),
      output: document.getElementById("output"),
      groups: document.getElementById("groups"),
      status: document.getElementById("status"),
      mergeStatus: document.getElementById("mergeStatus"),
      fieldCount: document.getElementById("fieldCount"),
      visibleCount: document.getElementById("visibleCount"),
      searchInput: document.getElementById("searchInput"),
      modeSelect: document.getElementById("modeSelect"),
      newVersionInput: document.getElementById("newVersionInput"),
      oldVersionInput: document.getElementById("oldVersionInput"),
      parseButton: document.getElementById("parseButton"),
      buildButton: document.getElementById("buildButton"),
      copyButton: document.getElementById("copyButton"),
      mergeButton: document.getElementById("mergeButton"),
      resetButton: document.getElementById("resetButton"),
      mergeResetButton: document.getElementById("mergeResetButton")
    };

    const modeBlocks = Array.from(document.querySelectorAll(".mode-block"));
    const modeInputs = Array.from(document.querySelectorAll('input[name="editorMode"]'));

    ensureOutputDisabled();
    elements.rawInput.value = "";
    elements.output.value = "";
    elements.newVersionInput.value = "";
    elements.oldVersionInput.value = "";
    updatePrimaryActionState();
    updateOutputActionState();
    updateModeVisibility();

    for (const modeInput of modeInputs) {
      modeInput.addEventListener("change", updateModeVisibility);
    }
    elements.parseButton.addEventListener("click", () => {
      clearRenderedResult();
      setStatus("正在解析設定...", "");
      parseConfig(elements.rawInput.value);
    });
    elements.buildButton.addEventListener("click", () => {
      elements.output.value = buildOutput();
      setStatus("已重新組回設定格式。", "success");
    });
    elements.copyButton.addEventListener("click", async () => {
      try {
        elements.output.value = buildOutput();
        await navigator.clipboard.writeText(elements.output.value);
        setStatus("輸出結果已複製到剪貼簿。", "success");
      } catch (error) {
        setStatus("無法直接寫入剪貼簿，請手動複製輸出區內容。", "error");
      }
    });
    elements.mergeButton.addEventListener("click", applyMergeFromVersions);
    elements.resetButton.addEventListener("click", () => {
      clearSingleMode();
    });
    elements.mergeResetButton.addEventListener("click", () => {
      clearMergeMode();
    });
    elements.searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      renderGroups();
    });
    elements.rawInput.addEventListener("input", handleRawInputChange);
    elements.rawInput.addEventListener("paste", handleRawInputChange);
    elements.newVersionInput.addEventListener("input", handleMergeInputChange);
    elements.newVersionInput.addEventListener("paste", handleMergeInputChange);
    elements.oldVersionInput.addEventListener("input", handleMergeInputChange);
    elements.oldVersionInput.addEventListener("paste", handleMergeInputChange);

    function clearSingleMode() {
      window.clearTimeout(autoParseTimer);
      elements.rawInput.value = "";
      clearRenderedResult();
      updatePrimaryActionState();
      setStatus("已清空內容。", "success");
      setMergeStatus("", "");
    }

    function clearMergeMode() {
      window.clearTimeout(autoParseTimer);
      elements.newVersionInput.value = "";
      elements.oldVersionInput.value = "";
      clearRenderedResult();
      updatePrimaryActionState();
      setStatus("", "");
      setMergeStatus("已清空內容。", "success");
    }

    function ensureOutputDisabled() {
      elements.output.disabled = true;
      elements.output.readOnly = true;
    }

    function updateOutputActionState() {
      const hasEntries = state.entries.length > 0;
      elements.buildButton.disabled = !hasEntries;
      elements.copyButton.disabled = !hasEntries;
    }

    function updatePrimaryActionState() {
      const hasRawInput = elements.rawInput.value.trim().length > 0;
      const hasNewVersionInput = elements.newVersionInput.value.trim().length > 0;
      const hasOldVersionInput = elements.oldVersionInput.value.trim().length > 0;

      elements.parseButton.disabled = !hasRawInput;
      elements.resetButton.disabled = !hasRawInput;
      elements.mergeButton.disabled = !(hasNewVersionInput && hasOldVersionInput);
      elements.mergeResetButton.disabled = !(hasNewVersionInput || hasOldVersionInput);
    }

    function handleRawInputChange() {
      clearRenderedResult();
      updatePrimaryActionState();
      setMergeStatus("", "");
      scheduleAutoParse();
    }

    function handleMergeInputChange() {
      clearRenderedResult();
      updatePrimaryActionState();
      setStatus("", "");
      setMergeStatus("", "");
    }

    function scheduleAutoParse() {
      window.clearTimeout(autoParseTimer);
      autoParseTimer = window.setTimeout(() => {
        const rawText = elements.rawInput.value.trim();
        if (!rawText || !rawText.includes("OptionSettings=")) {
          return;
        }

        const parsed = parseConfig(rawText, true, true);
        if (parsed) {
          setStatus(`已自動解析 ${state.entries.length} 個參數。`, "success");
        }
      }, 180);
    }

    function updateModeVisibility() {
      const selectedModeInput = modeInputs.find((input) => input.checked);
      const mode = selectedModeInput ? selectedModeInput.value : "single";
      for (const block of modeBlocks) {
        const targetMode = block.dataset.modeTarget;
        block.classList.toggle("is-hidden", targetMode !== mode);
      }

      state.entries = [];
      state.search = "";
      elements.searchInput.value = "";
      updatePrimaryActionState();
      renderGroups();
    }

    function getEmptyStateMessage() {
      const selectedModeInput = modeInputs.find((input) => input.checked);
      const mode = selectedModeInput ? selectedModeInput.value : "single";

      if (mode === "merge") {
        return "先在左側貼上新版與舊版設定，然後按「套用舊版到新版」。";
      }

      return "先在左側貼上設定，然後按「解析設定」。";
    }

    function clearRenderedResult() {
      state.entries = [];
      state.search = "";
      elements.searchInput.value = "";
      elements.output.value = "";
      updateOutputActionState();
      renderGroups();
    }

    function parseConfig(rawText, silent = false, suppressErrors = false) {
      const parsed = parseConfigText(rawText, suppressErrors);
      if (!parsed) {
        return false;
      }

      state.header = parsed.header;
      state.entries = parsed.entries;
      elements.output.value = buildOutput();
      updateOutputActionState();
      renderGroups();

      if (!silent) {
        setStatus(`已解析 ${parsed.entries.length} 個參數。`, "success");
      }

      return true;
    }

    function parseConfigText(rawText, suppressErrors = false) {
      const normalized = rawText.trim();
      if (!normalized) {
        if (!suppressErrors) {
          setStatus("請先貼上設定文字。", "error");
        }
        return null;
      }

      const lines = normalized.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const headerLine = lines.find((line) => line.startsWith("[") && line.endsWith("]"));
      const optionLine = lines.find((line) => line.startsWith("OptionSettings=")) || (lines.length === 1 && lines[0]);

      if (!optionLine || !optionLine.startsWith("OptionSettings=")) {
        if (!suppressErrors) {
          setStatus("找不到 OptionSettings=(...) 這一行。", "error");
        }
        return null;
      }

      const startIndex = optionLine.indexOf("(");
      const endIndex = findMatchingClosingParenthesis(optionLine, startIndex);
      if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
        if (!suppressErrors) {
          setStatus("OptionSettings 格式不完整，缺少最外層右括號。", "error");
        }
        return null;
      }

      const body = optionLine.slice(startIndex + 1, endIndex);
      const entries = splitTopLevel(body).map((segment) => parseEntry(segment)).filter(Boolean);

      if (!entries.length) {
        if (!suppressErrors) {
          setStatus("沒有解析到任何參數。", "error");
        }
        return null;
      }

      return {
        header: headerLine || state.header,
        entries
      };
    }

    function findMatchingClosingParenthesis(text, openIndex) {
      if (openIndex === -1) {
        return -1;
      }

      let depth = 0;
      let inQuotes = false;

      for (let index = openIndex; index < text.length; index += 1) {
        const char = text[index];
        const previous = text[index - 1];

        if (char === '"' && previous !== '\\') {
          inQuotes = !inQuotes;
          continue;
        }

        if (inQuotes) {
          continue;
        }

        if (char === "(") {
          depth += 1;
          continue;
        }

        if (char === ")") {
          depth -= 1;
          if (depth === 0) {
            return index;
          }
        }
      }

      return -1;
    }

    function splitTopLevel(text) {
      const parts = [];
      let current = "";
      let inQuotes = false;
      let parenthesisDepth = 0;

      for (let index = 0; index < text.length; index += 1) {
        const char = text[index];
        const previous = text[index - 1];

        if (char === '"' && previous !== '\\') {
          inQuotes = !inQuotes;
          current += char;
          continue;
        }

        if (!inQuotes && char === "(") {
          parenthesisDepth += 1;
          current += char;
          continue;
        }

        if (!inQuotes && char === ")") {
          parenthesisDepth = Math.max(0, parenthesisDepth - 1);
          current += char;
          continue;
        }

        if (char === "," && !inQuotes && parenthesisDepth === 0) {
          if (current.trim()) {
            parts.push(current.trim());
          }
          current = "";
          continue;
        }

        current += char;
      }

      if (current.trim()) {
        parts.push(current.trim());
      }

      return parts;
    }

    function parseEntry(segment) {
      const separatorIndex = segment.indexOf("=");
      if (separatorIndex === -1) {
        return null;
      }

      const key = segment.slice(0, separatorIndex).trim();
      const rawValue = segment.slice(separatorIndex + 1).trim();
      const definition = FIELD_DEFINITIONS[key] || {};
      const inferredType = inferType(rawValue);
      const valueType = inferredType;
      const useEnumOptions = definition.options && definition.options.includes(decodeValue(rawValue, inferredType));

      return {
        key,
        rawValue,
        valueType,
        step: definition.step || "0.1",
        label: definition.label || key,
        description: definition.description || FIELD_DESCRIPTIONS[key] || "",
        group: definition.group || "其他",
        options: useEnumOptions ? definition.options : [],
        value: decodeValue(rawValue, valueType)
      };
    }

    function inferType(rawValue) {
      if (/^(True|False)$/i.test(rawValue)) {
        return "boolean";
      }

      if (/^".*"$/.test(rawValue)) {
        return "string";
      }

      if (/^-?\d+$/.test(rawValue)) {
        return "integer";
      }

      if (/^-?\d+\.\d+$/.test(rawValue)) {
        return "number";
      }

      return "string-unquoted";
    }

    function decodeValue(rawValue, type) {
      if (type === "boolean") {
        return /^True$/i.test(rawValue);
      }

      if (type === "number" || type === "integer") {
        return rawValue;
      }

      if (type === "string") {
        return rawValue.slice(1, -1).replace(/\\"/g, '"');
      }

      return rawValue;
    }

    function encodeValue(entry) {
      if (entry.valueType === "boolean") {
        return entry.value ? "True" : "False";
      }

      if (entry.valueType === "number") {
        const numericValue = Number(entry.value);
        return Number.isFinite(numericValue) ? numericValue.toFixed(6) : "0.000000";
      }

      if (entry.valueType === "integer") {
        const integerValue = Number.parseInt(entry.value, 10);
        return Number.isFinite(integerValue) ? String(integerValue) : "0";
      }

      if (entry.valueType === "string") {
        return `"${String(entry.value).replace(/"/g, '\\"')}"`;
      }

      return String(entry.value).trim();
    }

    function buildOutput() {
      const optionBody = state.entries.map((entry) => `${entry.key}=${encodeValue(entry)}`).join(",");
      return `${state.header}\nOptionSettings=(${optionBody})`;
    }

    function buildConfigText(header, entries) {
      const optionBody = entries.map((entry) => `${entry.key}=${encodeValue(entry)}`).join(",");
      return `${header}\nOptionSettings=(${optionBody})`;
    }

    function applyMergeFromVersions() {
      clearRenderedResult();
      setStatus("正在套用舊版設定到新版...", "");
      setMergeStatus("正在比對新舊版參數...", "");

      const newParsed = parseConfigText(elements.newVersionInput.value);
      if (!newParsed) {
        setMergeStatus("新版設定格式不正確。", "error");
        return;
      }

      const oldParsed = parseConfigText(elements.oldVersionInput.value);
      if (!oldParsed) {
        setMergeStatus("舊版設定格式不正確。", "error");
        return;
      }

      const oldEntryMap = new Map(oldParsed.entries.map((entry) => [entry.key, entry]));
      let matchedCount = 0;
      const mergedEntries = newParsed.entries.map((entry) => {
        const oldEntry = oldEntryMap.get(entry.key);
        if (!oldEntry) {
          return { ...entry };
        }

        matchedCount += 1;
        return {
          ...entry,
          rawValue: oldEntry.rawValue,
          valueType: inferType(oldEntry.rawValue),
          value: decodeValue(oldEntry.rawValue, inferType(oldEntry.rawValue)),
          options: entry.options && entry.options.includes(decodeValue(oldEntry.rawValue, inferType(oldEntry.rawValue))) ? entry.options : []
        };
      });

      state.header = newParsed.header;
      state.entries = mergedEntries;
      state.search = "";
      elements.searchInput.value = "";
      elements.output.value = buildOutput();
      updateOutputActionState();
      renderGroups();

      const newOnlyCount = newParsed.entries.length - matchedCount;
      setStatus(`已將舊版設定套用到新版，共覆蓋 ${matchedCount} 個參數。`, "success");
      setMergeStatus(`套用完成：覆蓋 ${matchedCount} 個同名參數，保留 ${newOnlyCount} 個新版專屬參數。`, "success");
    }

    function renderGroups() {
      const grouped = new Map();
      for (const groupName of GROUP_ORDER) {
        grouped.set(groupName, []);
      }

      const searchText = state.search;
      const filteredEntries = state.entries.filter((entry) => {
        if (!searchText) {
          return true;
        }
        return [entry.key, entry.label, String(entry.value)].some((value) => value.toLowerCase().includes(searchText));
      });

      for (const entry of filteredEntries) {
        if (!grouped.has(entry.group)) {
          grouped.set(entry.group, []);
        }
        grouped.get(entry.group).push(entry);
      }

      elements.fieldCount.textContent = String(state.entries.length);
      elements.visibleCount.textContent = String(filteredEntries.length);

      if (!state.entries.length) {
        elements.groups.innerHTML = `<div class="empty">${escapeHtml(getEmptyStateMessage())}</div>`;
        return;
      }

      if (!filteredEntries.length) {
        elements.groups.innerHTML = '<div class="empty">找不到符合搜尋條件的欄位。</div>';
        return;
      }

      const markup = [];
      for (const [groupName, entries] of grouped.entries()) {
        if (!entries.length) {
          continue;
        }

        const fields = entries.map((entry) => renderField(entry)).join("");
        markup.push(`
          <section class="group">
            <h2>${escapeHtml(groupName)}</h2>
            <p>${escapeHtml(GROUP_DESCRIPTIONS[groupName] || GROUP_DESCRIPTIONS.其他)}</p>
            <div class="field-grid">${fields}</div>
          </section>
        `);
      }

      elements.groups.innerHTML = markup.join("");
      bindFieldEvents();
    }

    function renderField(entry) {
      const helpText = `${entry.key} · ${entry.valueType}`;
      const descriptionMarkup = entry.description ? `<div class="field-description">${escapeHtml(entry.description)}</div>` : "";
      let inputMarkup = "";

      if (entry.valueType === "boolean") {
        inputMarkup = `
          <select data-key="${escapeAttribute(entry.key)}">
            <option value="true" ${entry.value ? "selected" : ""}>True</option>
            <option value="false" ${entry.value ? "" : "selected"}>False</option>
          </select>
        `;
      } else if (entry.options.length) {
        const options = entry.options.map((option) => {
          const selected = String(entry.value) === option ? "selected" : "";
          return `<option value="${escapeAttribute(option)}" ${selected}>${escapeHtml(option)}</option>`;
        }).join("");
        inputMarkup = `<select data-key="${escapeAttribute(entry.key)}">${options}</select>`;
      } else if (entry.valueType === "integer") {
        inputMarkup = `<input data-key="${escapeAttribute(entry.key)}" type="number" step="1" value="${escapeAttribute(String(entry.value))}">`;
      } else if (entry.valueType === "number") {
        inputMarkup = `<input data-key="${escapeAttribute(entry.key)}" type="number" step="${escapeAttribute(entry.step)}" value="${escapeAttribute(String(entry.value))}">`;
      } else {
        inputMarkup = `<input data-key="${escapeAttribute(entry.key)}" type="text" value="${escapeAttribute(String(entry.value))}">`;
      }

      return `
        <div class="field">
          <label for="field-${escapeAttribute(entry.key)}">${escapeHtml(entry.label)}</label>
          ${inputMarkup}
          <small><code>${escapeHtml(helpText)}</code></small>
          ${descriptionMarkup}
        </div>
      `;
    }

    function bindFieldEvents() {
      const inputs = elements.groups.querySelectorAll("input[data-key], select[data-key]");
      for (const input of inputs) {
        input.addEventListener("input", handleFieldChange);
        input.addEventListener("change", handleFieldChange);
      }
    }

    function handleFieldChange(event) {
      const key = event.target.dataset.key;
      const entry = state.entries.find((item) => item.key === key);
      if (!entry) {
        return;
      }

      if (entry.valueType === "boolean") {
        entry.value = event.target.value === "true";
      } else {
        entry.value = event.target.value;
      }

      elements.output.value = buildOutput();
      updateOutputActionState();
    }

    function setStatus(message, type) {
      elements.status.textContent = message;
      elements.status.className = `status ${type || ""}`.trim();
    }

    function setMergeStatus(message, type) {
      elements.mergeStatus.textContent = message;
      elements.mergeStatus.className = `status ${type || ""}`.trim();
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function escapeAttribute(value) {
      return escapeHtml(value);
    }