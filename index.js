window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const container = document.getElementById("container");
    const toolCategoryTemplate = document.getElementById("tool-category-template");
    const toolListItemTemplate = document.getElementById("tool-list-item-template");

    const tools = [
        {
            name: "brew",
            title: "Brew",
            category: "Binary",
            description: "The Missing Package Manager for macOS (or Linux)"
        },
        {
            name: "lipo",
            title: "Lipo",
            category: "Binary",
            description: "Create or operate on a universal file: convert a universal binary to a single architecture file, or vice versa."
        },
        {
            name: "nm",
            title: "Symbol Table",
            category: "Binary",
            description: "Create or operate on a universal file: convert a universal binary to a single architecture file, or vice versa."
        },
        {
            name: "ping",
            title: "Ping",
            category: "Network",
            description: "Measures the round-trip time for messages sent from the originating host to a destination computer that are echoed back to the source."
        },
        {
            name: "whois",
            title: "Whois",
            category: "Network",
            description: "Internet domain name and network number directory service."
        },
        {
            name: "random-string",
            title: "Random String",
            category: "Text",
            description: "Generates a random string."
        },
        {
            name: "count",
            title: "Count",
            category: "Text",
            description: "Count characters, words and lines."
        },
        {
            name: "sort",
            title: "Sort",
            category: "Text",
            description: "Sort text."
        },
        {
            name: "base64",
            title: "Base64",
            category: "Cryptography",
            description: "Encode and decode base64 strings."
        },
        {
            name: "md5",
            title: "MD5",
            category: "Cryptography",
            description: "Encode and decode base64 strings."
        },
        {
            name: "binary",
            title: "Binary",
            category: "Maths",
            description: "Convert number to binary."
        },
        {
            name: "hex",
            title: "Hex",
            category: "Maths",
            description: "Convert number to hexadecimal."
        },
        {
            name: "lcm",
            title: "LCM",
            category: "Maths",
            description: "Least common multiplier."
        },
        {
            name: "gcd",
            title: "GCD",
            category: "Maths",
            description: "Greatest common divisor."
        },
        {
            name: "prettify-json",
            title: "Prettify JSON",
            category: "JSON",
            description: "Convert JSON to human readable format."
        },
        {
            name: "minify-json",
            title: "Minify JSON",
            category: "JSON",
            description: "Convert JSON to minified format."
        },
        {
            name: "xcode",
            title: "Xcode",
            category: "Xcode",
            description: "Clean xcode folders."
        },
        {
            name: "xcode-simulators",
            title: "Xcode Simulators",
            category: "Xcode",
            description: "Clean xcode folders."
        },
        {
            name: "apk-browser",
            title: "APK browser",
            category: "Android",
            description: "Browse the contents of APK files."
        },
    ]

    function getSortedCategories(tools) {
        const categories = [...new Set(tools.map(tool => tool.category))];
        return categories.sort();
    }

    function getSortedToolsByCategory(category) {
        const filteredTools = tools.filter(tool => tool.category === category);
        const sortedTools = filteredTools.sort((a, b) => a.title.localeCompare(b.title));
        return sortedTools;
    }

    function createToolCategory(category) {
        const toolCategory = toolCategoryTemplate.content.firstElementChild.cloneNode(true);
        let title = toolCategory.querySelector(".title");
        title.textContent = category;
        return toolCategory;
    }

    function createToolListItem(tool) {
        const target = "packages/" + tool.name + "/index.html";
        const toolListItem = toolListItemTemplate.content.firstElementChild.cloneNode(true);
        let title = toolListItem.querySelector(".title");
        let description = toolListItem.querySelector(".description");
        toolListItem.setAttribute("href", target);
        title.textContent = tool.title;
        description.textContent = tool.description;
        return toolListItem;
    }

    let categories = getSortedCategories(tools);
    for (let category of categories) {
        let toolsForCategory = getSortedToolsByCategory(category)

        let toolCategory = createToolCategory(category);
        container.appendChild(toolCategory);

        for (let tool of toolsForCategory) {
            let toolListItem = createToolListItem(tool);
            container.appendChild(toolListItem);
        }
    }
});