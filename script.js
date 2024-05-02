document.getElementById('generateButton').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const poemDisplay = document.getElementById('poemDisplay');
    const loveMusic = document.getElementById('loveMusic');

    const poems = [
        `爱情不仅仅是相遇，更是彼此不离不弃，${name1}与${name2}，愿你们的爱如星辰不息。`,
        `在爱情的世界里，没有谁对不起谁，只有谁不珍惜谁，${name1}和${name2}，愿你们珍惜彼此，共绘美好未来。`,
        `爱，就是当你拉开窗帘的那一刻，想到的第一个人是${name2}，${name1}，愿这份思念温暖你的每一个清晨。`,
        `${name1}和${name2}之间的爱，如同细水长流，永不干涸。`,
        `真正的爱情，是深刻的理解，加上无尽的包容，${name1}和${name2}，愿你们永远珍惜。`,
        `当${name1}遇见${name2}，就像星光遇见了夜空，美丽且神秘。`,
        `爱是一种遇见，不能等待也不能准备，${name1}遇见${name2}，如同花开遇见春天。`,
        `${name1}和${name2}，愿你们的爱情像日出一样，光芒万丈。`,
        `愿${name1}和${name2}的爱，如同老酒，越陈越香，永不过期。`,
        `在这个快节奏的世界里，${name1}和${name2}的爱情是最美的慢时光。`,
        `愿你们的爱情简单如夏花，绚烂如秋叶，${name1}和${name2}，是彼此的春风与冬雪。`,
        `不是因为看到了希望才去爱，而是因为要爱，所以看到了希望，${name1}和${name2}的爱就是这样。`,
        `愿${name1}与${name2}的爱，如同宁静的海洋，深沉而广阔。`,
        `每个心中都有一片森林，而${name2}走进了${name1}的心，成了那不再荒凉的森林。`,
        `${name1}和${name2}的相爱，是诗，是远方，是彼此的心灯。`,
        `愿${name1}和${name2}的每一天都能够证明，时间是爱情最好的见证者。`,
        `有些爱，一眼万年；${name1}和${name2}，是那千年的等待，换来今生的相遇。`,
        `愿${name1}和${name2}的爱情，像星星一样，不急不躁，却又璀璨夺目。`,
        `真爱是${name1}和${name2}心中的宁静与喜悦，不言而喻，却又言不尽。`,
        `${name1}和${name2}，不只是彼此的避风港，更是向往的方向。`
    ];

    const selectedPoem = poems[Math.floor(Math.random() * poems.length)];
    poemDisplay.innerHTML = selectedPoem;
    poemDisplay.style.display = 'block';

    // 播放音乐
    if (loveMusic.paused) {
        loveMusic.play();
    } else {
        loveMusic.currentTime = 0; // 重置到开始
    }
});
