var timer = 0,
    // delay / song length
    delay = 100;

// tranverse element
var transverse = function($el) {
    timer += delay;
    setTimeout(function() {
        highlight($el);
        var $chidren = $el.children();
        if ($chidren.length) {
            for (var i = 0; i < $chidren.length; i += 1) {
                transverse($chidren.eq(i));
            }
        }
    }, timer);
};

// highlight dom, play beeps
var highlight = function($el) {
    $el.addClass('highlight');
    if ($el.is('body')) {
        beeps[0].play();
    }
    else if ($el.is('div')) {
        beeps[1].play();
    }
    else if ($el.is('span')) {
        beeps[2].play();
    }
    else {
        beeps[3].play();
    }
    setTimeout(function() {
        $el.removeClass('highlight');
    }, delay);
};

// generate beeps
var beep_count = 4,
    beeps = [];

for (var i=1; i<=beep_count; i+=1) {
    beeps.push(
        new window.buzz.sound( "beeps/beep" + i, {
            formats: [ "wav" ]
        })
    );
}

// start transversing
transverse($('body'));