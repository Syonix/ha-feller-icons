async function getIcon(name) {
    if (!(name in icons) && name in aliases)
        name = aliases[name];

    if (!(name in icons)) {
        console.log(`Icon "${name}" not available`);
        return '';
    }

    var svgDef = icons[name];
    return {
        path: svgDef[4],
        viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
    }
}

async function getIconList() {
    var iconList = Object.entries(icons).map(([icon]) => ({name: icon}));
    var aliasList = Object.keys(aliases).map(icon => ({name: icon}));
    
    return iconList.concat(aliasList);
}

window.customIconsets = window.customIconsets || {};
window.customIconsets['feller'] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons['feller'] = { getIcon, getIconList };
