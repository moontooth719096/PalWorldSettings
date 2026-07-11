
    const SAMPLE_CONFIG = `[\/Script\/Pal.PalGameWorldSettings]\nOptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.500000,ExpRate=3.000000,PalCaptureRate=3.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=2.000000,PlayerDamageRateDefense=0.500000,PlayerStomachDecreaceRate=0.500000,PlayerStaminaDecreaceRate=0.500000,PlayerAutoHPRegeneRate=2.000000,PlayerAutoHpRegeneRateInSleep=4.000000,PalStomachDecreaceRate=3.000000,PalStaminaDecreaceRate=2.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=2.000000,BuildObjectDamageRate=0.500000,BuildObjectDeteriorationDamageRate=0.000000,CollectionDropRate=3.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=0.500000,EnemyDropItemRate=3.000000,DeathPenalty=None,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=50,DropItemAliveMaxHours=0.200000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=0.000000,WorkSpeedRate=1.500000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=True,bEnableNonLoginPenalty=False,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=12,ServerPlayerMaxNum=32,ServerName="SiniServer",ServerDescription="鞈蝢?,AdminPassword="M951951951",ServerPassword="54358602",PublicPort=8211,PublicIP="35.194.245.98",RCONEnabled=True,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")`;

    const FIELD_DEFINITIONS = {
      Difficulty: { label: "??漲", type: "enum", group: "銝?", options: ["None", "Easy", "Normal", "Hard"] },
      DayTimeSpeedRate: { label: "?賢予???漲", type: "number", step: "0.1", group: "銝?" },
      NightTimeSpeedRate: { label: "憭????漲", type: "number", step: "0.1", group: "銝?" },
      ExpRate: { label: "蝬???", type: "number", step: "0.1", group: "????? },
      PalCaptureRate: { label: "撣陌???", type: "number", step: "0.1", group: "????? },
      PalSpawnNumRate: { label: "撣陌????", type: "number", step: "0.1", group: "????? },
      PalDamageRateAttack: { label: "撣陌?餅???", type: "number", step: "0.1", group: "?圈洛" },
      PalDamageRateDefense: { label: "撣陌?脩戌??", type: "number", step: "0.1", group: "?圈洛" },
      PlayerDamageRateAttack: { label: "?拙振?餅???", type: "number", step: "0.1", group: "?圈洛" },
      PlayerDamageRateDefense: { label: "?拙振?脩戌??", type: "number", step: "0.1", group: "?圈洛" },
      PlayerStomachDecreaceRate: { label: "?拙振憌賡?銝???", type: "number", step: "0.1", group: "?拙振" },
      PlayerStaminaDecreaceRate: { label: "?拙振??銝???", type: "number", step: "0.1", group: "?拙振" },
      PlayerAutoHPRegeneRate: { label: "?拙振?芸?????", type: "number", step: "0.1", group: "?拙振" },
      PlayerAutoHpRegeneRateInSleep: { label: "?拙振?∠?????", type: "number", step: "0.1", group: "?拙振" },
      PalStomachDecreaceRate: { label: "撣陌憌賡?銝???", type: "number", step: "0.1", group: "撣陌" },
      PalStaminaDecreaceRate: { label: "撣陌??銝???", type: "number", step: "0.1", group: "撣陌" },
      PalAutoHPRegeneRate: { label: "撣陌?芸?????", type: "number", step: "0.1", group: "撣陌" },
      PalAutoHpRegeneRateInSleep: { label: "撣陌?∠?????", type: "number", step: "0.1", group: "撣陌" },
      BuildObjectDamageRate: { label: "撱箇?????", type: "number", step: "0.1", group: "撱箇???? },
      BuildObjectDeteriorationDamageRate: { label: "撱箇??芰????", type: "number", step: "0.1", group: "撱箇???? },
      CollectionDropRate: { label: "?⊿????", type: "number", step: "0.1", group: "撱箇???? },
      CollectionObjectHpRate: { label: "?⊿??拐辣????", type: "number", step: "0.1", group: "撱箇???? },
      CollectionObjectRespawnSpeedRate: { label: "?⊿??拐辣???漲", type: "number", step: "0.1", group: "撱箇???? },
      EnemyDropItemRate: { label: "?萎犖???", type: "number", step: "0.1", group: "????? },
      DeathPenalty: { label: "甇颱滿?脩蔑", type: "enum", group: "銝?", options: ["None", "Item", "ItemAndEquipment", "All"] },
      bEnablePlayerToPlayerDamage: { label: "?拙振鈭", type: "boolean", group: "憭犖??PvP" },
      bEnableFriendlyFire: { label: "???瑕拿", type: "boolean", group: "憭犖??PvP" },
      bEnableInvaderEnemy: { label: "?臬?必??隞?, type: "boolean", group: "銝?" },
      bActiveUNKO: { label: "? UNKO ?", type: "boolean", group: "銝?" },
      bEnableAimAssistPad: { label: "??頛??", type: "boolean", group: "?拙振" },
      bEnableAimAssistKeyboard: { label: "?菟?頛??", type: "boolean", group: "?拙振" },
      DropItemMaxNum: { label: "?圈??拐???, type: "integer", group: "撱箇???? },
      DropItemMaxNum_UNKO: { label: "UNKO ??拐???, type: "integer", group: "撱箇???? },
      BaseCampMaxNum: { label: "??銝?", type: "integer", group: "?箏??? },
      BaseCampWorkerMaxNum: { label: "?格?暺極雿?擳臭???, type: "integer", group: "?箏??? },
      DropItemAliveMaxHours: { label: "??拙?瘣餅???, type: "number", step: "0.1", group: "撱箇???? },
      bAutoResetGuildNoOnlinePlayers: { label: "?Ｙ??芸??蔭?祆?", type: "boolean", group: "?箏??? },
      AutoResetGuildTimeNoOnlinePlayers: { label: "?祆??蔭蝑?撠?", type: "number", step: "1", group: "?箏??? },
      GuildPlayerMaxNum: { label: "?祆?鈭箸銝?", type: "integer", group: "?箏??? },
      PalEggDefaultHatchingTime: { label: "撣陌?音????, type: "number", step: "0.1", group: "撣陌" },
      WorkSpeedRate: { label: "撌乩??漲??", type: "number", step: "0.1", group: "?箏??? },
      bIsMultiplay: { label: "憭犖璅∪?", type: "boolean", group: "憭犖??PvP" },
      bIsPvP: { label: "PvP 璅∪?", type: "boolean", group: "憭犖??PvP" },
      bCanPickupOtherGuildDeathPenaltyDrop: { label: "?舀?嗡??祆?甇颱滿?", type: "boolean", group: "憭犖??PvP" },
      bEnableNonLoginPenalty: { label: "?Ｙ??脩蔑", type: "boolean", group: "憭犖??PvP" },
      bEnableFastTravel: { label: "敹恍?銵?, type: "boolean", group: "銝?" },
      bIsStartLocationSelectByMap: { label: "?啣??豢??箇?暺?, type: "boolean", group: "銝?" },
      bExistPlayerAfterLogout: { label: "?餃敺??脩??其???, type: "boolean", group: "憭犖??PvP" },
      bEnableDefenseOtherGuildPlayer: { label: "?舫蝳血隞?摰?, type: "boolean", group: "憭犖??PvP" },
      CoopPlayerMaxNum: { label: "??鈭箸銝?", type: "integer", group: "隡箸??? },
      ServerPlayerMaxNum: { label: "隡箸??其犖?訾???, type: "integer", group: "隡箸??? },
      ServerName: { label: "隡箸??典?蝔?, type: "string", group: "隡箸??? },
      ServerDescription: { label: "隡箸??冽?餈?, type: "string", group: "隡箸??? },
      AdminPassword: { label: "蝞∠??∪?蝣?, type: "string", group: "隡箸??? },
      ServerPassword: { label: "隡箸??典?蝣?, type: "string", group: "隡箸??? },
      PublicPort: { label: "?祇??????, type: "integer", group: "隡箸??? },
      PublicIP: { label: "?祇? IP", type: "string", group: "隡箸??? },
      RCONEnabled: { label: "? RCON", type: "boolean", group: "隡箸??? },
      RCONPort: { label: "RCON ?????, type: "integer", group: "隡箸??? },
      Region: { label: "???, type: "string", group: "隡箸??? },
      bUseAuth: { label: "?撽?", type: "boolean", group: "隡箸??? },
      BanListURL: { label: "撠?皜蝬脣?", type: "string", group: "隡箸??? }
    };

    const GROUP_DESCRIPTIONS = {
      銝?: "???摨艾香鈭⊥蝵啗?銝?璈??,
      ????? "蝬????脯????抵???賊?????,
      ?圈洛: "?拙振??擳舐??駁????,
      ?拙振: "?拙振憌賡?????敺抵???頛??,
      撣陌: "撣陌??摮??音?漲??,
      撱箇???? "撱箇??????賜??皞???,
      ?箏??? "?????撌乩?????,
      憭犖??PvP: "憭犖鈭??vP ??箇???箝?,
      隡箸??? "?迂??蝣潦???CON ??身摰?,
      ?嗡?: "?芷???憿?隞?湔蝺刻摩??雿?
    };

    const GROUP_ORDER = ["銝?", "?????, "?圈洛", "?拙振", "撣陌", "撱箇????, "?箏???, "憭犖??PvP", "隡箸???, "?嗡?"];

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
      setStatus("撌脤??啁??身摰撘?, "success");
    });
    elements.copyButton.addEventListener("click", async () => {
      try {
        elements.output.value = buildOutput();
        await navigator.clipboard.writeText(elements.output.value);
        setStatus("頛詨蝯?撌脰?鋆賢?芾票蝪踴?, "success");
      } catch (error) {
        setStatus("?⊥??湔撖怠?芾票蝪選?隢???鋆質撓?箏??批捆??, "error");
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
      setStatus("撌脫?蝛箏摰嫘?, "success");
    });
    elements.searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      renderGroups();
    });

    function parseConfig(rawText, silent = false) {
      const normalized = rawText.trim();
      if (!normalized) {
        if (!silent) {
          setStatus("隢?鞎潔?閮剖?????, "error");
        }
        return;
      }

      const lines = normalized.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const headerLine = lines.find((line) => line.startsWith("[") && line.endsWith("]"));
      const optionLine = lines.find((line) => line.startsWith("OptionSettings=")) || (lines.length === 1 && lines[0]);

      if (!optionLine || !optionLine.startsWith("OptionSettings=")) {
        setStatus("?曆???OptionSettings=(...) ??銵?, "error");
        return;
      }

      const startIndex = optionLine.indexOf("(");
      const endIndex = optionLine.lastIndexOf(")");
      if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
        setStatus("OptionSettings ?澆?銝??湛?蝻箏??祈???, "error");
        return;
      }

      const body = optionLine.slice(startIndex + 1, endIndex);
      const entries = splitTopLevel(body).map((segment) => parseEntry(segment)).filter(Boolean);

      if (!entries.length) {
        setStatus("瘝?閫???唬遙雿??詻?, "error");
        return;
      }

      state.header = headerLine || state.header;
      state.entries = entries;
      elements.output.value = buildOutput();
      renderGroups();

      if (!silent) {
        setStatus(`撌脰圾??${entries.length} ???詻, "success");
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
        group: definition.group || "?嗡?",
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
        elements.groups.innerHTML = '<div class="empty">?撌血鞎潔?閮剖?嚗敺??圾?身摰?/div>';
        return;
      }

      if (!filteredEntries.length) {
        elements.groups.innerHTML = '<div class="empty">?曆??啁泵??撠?隞嗥?甈???/div>';
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
            <p>${escapeHtml(GROUP_DESCRIPTIONS[groupName] || GROUP_DESCRIPTIONS.?嗡?)}</p>
            <div class="field-grid">${fields}</div>
          </section>
        `);
      }

      elements.groups.innerHTML = markup.join("");
      bindFieldEvents();
    }

    function renderField(entry) {
      const helpText = `${entry.key} 繚 ${entry.valueType}`;
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
  
