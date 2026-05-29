
document.addEventListener("DOMContentLoaded", () => {
    const languageList = {
        ar: "Arabic",
        so: "Somali",
        en: "English",
        fr: "French",
        es: "Spanish",
        de: "German",
        it: "Italian",
        tr: "Turkish",
        sw: "Swahili",
        am: "Amharic",
        zh: "Chinese",
        ru: "Russian",
        hi: "Hindi",
        pt: "Portuguese",
        ja: "Japanese",
        ko: "Korean"
    };

    const selectSource = document.getElementById("fromLang");
    const selectTarget = document.getElementById("toLang");

  
    Object.entries(languageList).forEach(([langCode, langName]) => {
        const optSource = new Option(langName, langCode);
        const optTarget = new Option(langName, langCode);

        selectSource.add(optSource);
        selectTarget.add(optTarget);
    });

    selectSource.value = "en";
    selectTarget.value = "so";

   
    window.translateText = async function () {
        const sourceText = document.getElementById("inputText").value.trim();
        const langFrom = selectSource.value;
        const langTo = selectTarget.value;
        const displayOutput = document.getElementById("outputText");

        if (!sourceText) {
            displayOutput.innerText = "Fadlan wax ku qor mesha aad ka tagtay!";
            return;
        }

        displayOutput.innerText = "Waa la turjumayaa...";

        try {
            const apiEndpoint = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=${langFrom}|${langTo}`;
            const apiResponse = await fetch(apiEndpoint);
            const resultData = await apiResponse.json();

            displayOutput.innerText = resultData.responseData.translatedText;
            
        } catch (err) {
            console.error(err);
            displayOutput.innerText = "Qalad ayaa dhacay ";
        }
    };
});