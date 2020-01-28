//global js

HTMLCollection.prototype.forEach = Array.prototype.forEach; //add foreach method on HTMLCollection

//adds and include an element into another
Element.prototype.addElement = function(type, className = "") {
    var newElement = document.createElement(type);
    this.appendChild(newElement);
    newElement.setAttribute('class', className);
    return newElement;
};
//remove matching childs
Element.prototype.removeChilds = function(elemQuerySelector = false) {
    if (elemQuerySelector) {
        var elemsToRemove = [...this.querySelectorAll(elemQuerySelector)]
    } else {
        var elemsToRemove = [...this.childNodes];
    }
    elemsToRemove.forEach((elem) => {
        elem.remove();
    });
};
String.prototype.capitalise = function() {
        return this[0].toUpperCase() + this.slice(1);
    }
    //get Monday to sunday day number (monday is 0)
Date.prototype.getMoSuDay = function() {
    var currentDay = this.getDay();
    if (currentDay === 0) {
        return 6;
    }
    return currentDay - 1;
};
//get first and last day of the week, starting on monday
Date.prototype.getWeek = function() {
    var currentStamp = this.getTime();
    var currentDayIndex = this.getMoSuDay();

    var dayLengthStamp = 24 * 60 * 60 * 1000;
    var firstDayStamp = currentStamp - currentDayIndex * dayLengthStamp;
    var lastDayStamp = currentStamp + (6 - currentDayIndex) * dayLengthStamp;
    var lastWorkStamp = lastDayStamp - (2 * dayLengthStamp);
    //TODO: add week number to return

    return {
        first: (new Date(firstDayStamp)).getAbsoluteDay(),
        last: (new Date(lastDayStamp)).getAbsoluteDay(),
        lastWork: (new Date(lastWorkStamp)).getAbsoluteDay()
    }
};
Date.prototype.getRightMonth = function() {
    return String("00" + (this.getMonth() + 1)).slice(-2);
}
Date.prototype.getAbsoluteDay = function() {
    var stamp = this.getTime();
    stamp -= (this.getHours() * 60 * 60 * 1000);
    stamp -= (this.getMinutes() * 60 * 1000);
    stamp -= (this.getSeconds() * 1000);
    stamp -= this.getMilliseconds();
    return new Date(stamp);
}

function async_requestAnimationFrame() {
    return new Promise(function(res, rej) {
        requestAnimationFrame(res);
    });
}

function async_setTimeout(time) {
    return new Promise(function(res, rej) {
        setTimeout(res, time);
    });
}

var Utils = {};
Utils.callApi = async function(path, { method = "GET", query = false, body = false, rawCallData = false } = {}) {
    sss
};