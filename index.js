import { tools } from './src/tools.js';

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const container = document.getElementById("container");
    const toolCategoryTemplate = document.getElementById("tool-category-template");
    const toolListItemTemplate = document.getElementById("tool-list-item-template");

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