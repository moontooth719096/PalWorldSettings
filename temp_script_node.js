
    const SAMPLE_CONFIG = `[\/Script\/Pal.PalGameWorldSettings]\nOptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.500000,ExpRate=3.000000,PalCaptureRate=3.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=2.000000,PlayerDamageRateDefense=0.500000,PlayerStomachDecreaceRate=0.500000,PlayerStaminaDecreaceRate=0.500000,PlayerAutoHPRegeneRate=2.000000,PlayerAutoHpRegeneRateInSleep=4.000000,PalStomachDecreaceRate=3.000000,PalStaminaDecreaceRate=2.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=2.000000,BuildObjectDamageRate=0.500000,BuildObjectDeteriorationDamageRate=0.000000,CollectionDropRate=3.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=0.500000,EnemyDropItemRate=3.000000,DeathPenalty=None,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=50,DropItemAliveMaxHours=0.200000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=0.000000,WorkSpeedRate=1.500000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=True,bEnableNonLoginPenalty=False,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=12,ServerPlayerMaxNum=32,ServerName="SiniServer",ServerDescription="賈霸美",AdminPassword="M951951951",ServerPassword="54358602",PublicPort=8211,PublicIP="35.194.245.98",RCONEnabled=True,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")`;

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
      BanListURL: { label: "封鎖清單網址", type: "string", group: "伺服器" }
    };

    const GROUP_DESCRIPTIONS = {
      世界: "時間、難度、死亡懲罰與世界機制。",
      成長與掉落: "經驗、捕獲、生成與物資掉落相關倍率。",
      戰鬥: "玩家與帕魯的攻防倍率。",
      玩家: "玩家飽食、耐力、回復與操作輔助。",
      帕魯: "帕魯的生存、耐力與孵化速度。",
      建築與採集: "建築耐久、掉落物與資源重生。",
      基地與公會: "據點、公會與工作效率。",
      多人與 PvP: "多人互動、PvP 與登出相關行為。",
      伺服器: "名稱、密碼、連線埠、RCON 與公開設定。",
      其他: "未預先分類但仍可直接編輯的欄位。"
    };

    const GROUP_ORDER = ["世界", "成長與掉落", "戰鬥", "玩家", "帕魯", "建築與採集", "基地與公會", "多人與 PvP", "伺服器", "其他"];

    const state = {
      header: "[/Script/Pal.PalGameWorldSettings]",
      entries: [],
      search: ""
    };

    const elements = {
      rawInput: document.getElementById("rawInput"),
      output: document.getElementById("output"),
      groups: document.getElementById("groups"),
      status: document.getElementById("status"),
      fieldCount: document.getElementById("fieldCount"),
      visibleCount: document.getElementById("visibleCount"),
      searchInput: document.getElementById("searchInput"),
      parseButton: document.getElementById("parseButton"),
      buildButton: document.getElementById("buildButton"),
      copyButton: document.getElementById("copyButton"),
      loadSampleButton: document.getElementById("loadSampleButton"),
      resetButton: document.getElementById("resetButton")
    };

    elements.rawInput.value = SAMPLE_CONFIG;
    parseConfig(SAMPLE_CONFIG, true);

    elements.parseButton.addEventListener("click", () => parseConfig(elements.rawInput.value));
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
    elements.loadSampleButton.addEventListener("click", () => {
      elements.rawInput.value = SAMPLE_CONFIG;
      parseConfig(SAMPLE_CONFIG);
    });
    elements.resetButton.addEventListener("click", () => {
      elements.rawInput.value = "";
      elements.output.value = "";
      state.entries = [];
      state.search = "";
      elements.searchInput.value = "";
      renderGroups();
      setStatus("已清空內容。", "success");
    });
    elements.searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      renderGroups();
    });

    function parseConfig(rawText, silent = false) {
      const normalized = rawText.trim();
      if (!normalized) {
        if (!silent) {
          setStatus("請先貼上設定文字。", "error");
        }
        return;
      }

      const lines = normalized.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const headerLine = lines.find((line) => line.startsWith("[") && line.endsWith("]"));
      const optionLine = lines.find((line) => line.startsWith("OptionSettings=")) || (lines.length === 1 && lines[0]);

      if (!optionLine || !optionLine.startsWith("OptionSettings=")) {
        setStatus("找不到 OptionSettings=(...) 這一行。", "error");
        return;
      }

      const startIndex = optionLine.indexOf("(");
      const endIndex = optionLine.lastIndexOf(")");
      if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
        setStatus("OptionSettings 格式不完整，缺少括號。", "error");
        return;
      }

      const body = optionLine.slice(startIndex + 1, endIndex);
      const entries = splitTopLevel(body).map((segment) => parseEntry(segment)).filter(Boolean);

      if (!entries.length) {
        setStatus("沒有解析到任何參數。", "error");
        return;
      }

      state.header = headerLine || state.header;
      state.entries = entries;
      elements.output.value = buildOutput();
      renderGroups();

      if (!silent) {
        setStatus(`已解析 ${entries.length} 個參數。`, "success");
      }
    }

    function splitTopLevel(text) {
      const parts = [];
      let current = "";
      let inQuotes = false;

      for (let index = 0; index < text.length; index += 1) {
        const char = text[index];
        const previous = text[index - 1];

        if (char === '"' && previous !== '\\') {
          inQuotes = !inQuotes;
          current += char;
          continue;
        }

        if (char === "," && !inQuotes) {
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
      const valueType = definition.type || inferType(rawValue);

      return {
        key,
        rawValue,
        valueType,
        step: definition.step || "0.1",
        label: definition.label || key,
        group: definition.group || "其他",
        options: definition.options || [],
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
        elements.groups.innerHTML = '<div class="empty">先在左側貼上設定，然後按「解析設定」。</div>';
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
    }

    function setStatus(message, type) {
      elements.status.textContent = message;
      elements.status.className = `status ${type || ""}`.trim();
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
  