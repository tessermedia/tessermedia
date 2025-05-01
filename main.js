function SortByName(a, b) {
    var aName = a.size;
    var bName = b.size;
    return aName.localeCompare(bName);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

$(document).ready(function() {
    var icons = [
        { name: 'recycle_bin_empty.png', size: '32' },
        { name: 'computer_explorer.png', size: '32' },
        { name: 'directory_closed.png', size: '32' }
    ];

    icons = icons.sort(SortByName);

    for (var i = 0; i < icons.length; i++) {
        var $elem = $(".icon-inner-container ul");

        var icon_name = icons[i].name.replace('.png', '').replace(/-/g, ' ').replace(/_/g, ' ');
        var name = toTitleCase(icon_name);
        var img_src = "icons/" + icons[i].name;
        var size_classname = "img" + icons[i].size;
        var img_classname = 'bg-' + icons[i].name.replace('.png', '').replace(/_/g, '_').replace(/-/g, '_').toLowerCase();
        var object = '<li class="icon-item"><span class="helper"></span><a href="' + img_src + '" target="_blank"><div class="' + img_classname + ' ' + size_classname + '" title="' + name + '"></div></a></li>';

        // Append the constructed HTML to the DOM
        $elem.append(object);
    }
});