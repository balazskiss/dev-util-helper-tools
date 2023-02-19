window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const container = document.getElementById("container");
    const template = document.getElementById("template");

    const tools = [
        {
            name: "brew",
            title: "Brew",
            description: "The Missing Package Manager for macOS (or Linux)"
        },
        {
            name: "lipo",
            title: "Lipo",
            description: "Create or operate on a universal file: convert a universal binary to a single architecture file, or vice versa."
        },
        {
            name: "nm",
            title: "Symbol Table",
            description: "Create or operate on a universal file: convert a universal binary to a single architecture file, or vice versa."
        },
        {
            name: "ping",
            title: "Ping",
            description: "Measures the round-trip time for messages sent from the originating host to a destination computer that are echoed back to the source."
        },
        {
            name: "xcode",
            title: "Xcode",
            description: "This is the description."
        },
        {
            name: "base64",
            title: "Base64 Encode",
            description: "This is the description."
        },
        {
            name: "base64",
            title: "Base64 Decode",
            description: "This is the description."
        },
        {
            name: "random",
            title: "Random Text",
            description: "This is the description."
        }
    ]

    for (var i = 0; i < tools.length; i++) {
        let tool = tools[i];
        const target = "packages/"+tool.name+"/index.html";
        const secondClone = template.content.firstElementChild.cloneNode(true);
        let title = secondClone.querySelector(".title");
        let description = secondClone.querySelector(".description");
        secondClone.setAttribute("href", target);
        title.textContent = tool.title;
        description.textContent = tool.description;
        container.appendChild(secondClone);
    }
});