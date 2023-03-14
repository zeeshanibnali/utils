var stores = [
    {
        id: 1
    },
];
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomWithProbability() {
    var notRandomNumbers = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var idx = Math.floor(Math.random() * notRandomNumbers.length);
    return notRandomNumbers[idx];
}
var sqls = [];
var generateKeeper = function (storeId, date, presence) {
    var crud = new Date();
    var sql = "INSERT INTO keepers (\"storeId\", \"snapshotTime\", presence, \"createdAt\", \"updatedAt\") values (".concat(storeId, ",'").concat(date.toISOString(), "', ").concat(presence, ", '").concat(crud.toISOString(), "', '").concat(crud.toISOString(), "');");
    sqls.push(sql);
};
var generateVisitors = function (storeId, date) {
    var crud = new Date();
    var sql = "INSERT INTO visitors (\"storeId\", \"enterTime\",\"createdAt\", \"updatedAt\") values (".concat(storeId, ",'").concat(date.toISOString(), "', '").concat(crud.toISOString(), "', '").concat(crud.toISOString(), "');");
    sqls.push(sql);
};
var generateOccupancy = function (storeId, date, count) {
    var crud = new Date();
    var sql = "INSERT INTO occupancies (\"storeId\", \"snapshotTime\",count,\"createdAt\", \"updatedAt\")  values (".concat(storeId, ",'").concat(date.toISOString(), "',").concat(count, ",'").concat(crud.toISOString(), "', '").concat(crud.toISOString(), "');");
    sqls.push(sql);
};
var addHours = function (date, h) {
    date.setTime(date.getTime() + h * 60 * 60 * 1000);
    return date;
};
for (var i = 0; i < stores.length; ++i) {
    var currentDate = new Date(); // get the current date
    var startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    startDate.setDate(startDate.getDate() + 1);
    for (var x = 0; x < 364; ++x) {
        for (var hour = 1; hour <= 24; ++hour) {
            startDate = addHours(startDate, 1);
            var startHour = getRandomInt(8, 10);
            if (startDate.getHours() == 8) {
                if (startHour === 8) {
                    var referenceTime = startDate;
                    var shopKeeperEnterTime = addMinutes(startDate, getRandomInt(45, 60) // 1 to 10 minutes
                    );
                    generateKeeper(stores[i].id, shopKeeperEnterTime, true);
                    var visitors_1 = getRandomInt(3, 5);
                    var visitorTime_1 = addMinutes(shopKeeperEnterTime, getRandomInt(5, 7));
                    for (var m_1 = 0; m_1 < visitors_1; ++m_1) {
                        generateVisitors(stores[i].id, visitorTime_1);
                        visitorTime_1 = addMinutes(visitorTime_1, getRandomInt(5, 7));
                    }
                    var snapshotTime_1 = addHours(referenceTime, 1);
                    generateOccupancy(stores[i].id, snapshotTime_1, getRandomInt(visitors_1 - 1, visitors_1));
                }
            }
            if (startDate.getHours() == 9) {
                var referenceTime = startDate;
                if (startHour === 9) {
                    var shopKeeperEnterTime = addMinutes(startDate, getRandomInt(0, 45) // 1 to 10 minutes
                    );
                    generateKeeper(stores[i].id, shopKeeperEnterTime, true);
                }
                var visitors_2 = getRandomInt(4, 8);
                var visitorTime_2 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_2 = 0; m_2 < visitors_2; ++m_2) {
                    generateVisitors(stores[i].id, visitorTime_2);
                    visitorTime_2 = addMinutes(visitorTime_2, getRandomInt(5, 7));
                }
                var snapshotTime_2 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_2, getRandomInt(visitors_2 - 1, visitors_2));
            }
            if (startDate.getHours() == 10) {
                var referenceTime = startDate;
                var visitors_3 = getRandomInt(5, 8);
                var visitorTime_3 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_3 = 0; m_3 < visitors_3; ++m_3) {
                    generateVisitors(stores[i].id, visitorTime_3);
                    visitorTime_3 = addMinutes(visitorTime_3, getRandomInt(5, 7));
                }
                var snapshotTime_3 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_3, getRandomInt(visitors_3 - 1, visitors_3));
            }
            if (startDate.getHours() == 11) {
                var referenceTime = startDate;
                var visitors_4 = getRandomInt(5, 8);
                var visitorTime_4 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_4 = 0; m_4 < visitors_4; ++m_4) {
                    generateVisitors(stores[i].id, visitorTime_4);
                    visitorTime_4 = addMinutes(visitorTime_4, getRandomInt(5, 7));
                }
                var snapshotTime_4 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_4, getRandomInt(visitors_4 - 1, visitors_4));
            }
            if (startDate.getHours() == 12) {
                var referenceTime = startDate;
                var visitors_5 = getRandomInt(15, 18);
                var visitorTime_5 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_5 = 0; m_5 < visitors_5; ++m_5) {
                    generateVisitors(stores[i].id, visitorTime_5);
                    visitorTime_5 = addMinutes(visitorTime_5, getRandomInt(5, 7));
                }
                var snapshotTime_5 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_5, getRandomInt(visitors_5 - 1, visitors_5));
            }
            if (startDate.getHours() == 13) {
                var referenceTime = startDate;
                var visitors_6 = getRandomInt(15, 18);
                var visitorTime_6 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_6 = 0; m_6 < visitors_6; ++m_6) {
                    generateVisitors(stores[i].id, visitorTime_6);
                    visitorTime_6 = addMinutes(visitorTime_6, getRandomInt(5, 7));
                }
                var snapshotTime_6 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_6, getRandomInt(visitors_6 - 1, visitors_6));
            }
            if (startDate.getHours() == 14) {
                var referenceTime = startDate;
                var visitors_7 = getRandomInt(15, 18);
                var visitorTime_7 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_7 = 0; m_7 < visitors_7; ++m_7) {
                    generateVisitors(stores[i].id, visitorTime_7);
                    visitorTime_7 = addMinutes(visitorTime_7, getRandomInt(5, 7));
                }
                var snapshotTime_7 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_7, getRandomInt(visitors_7 - 1, visitors_7));
            }
            if (startDate.getHours() == 15) {
                var referenceTime = addMinutes(startDate, getRandomInt(7, 15));
                generateKeeper(stores[i].id, referenceTime, false);
            }
            if (startDate.getHours() == 16) {
                //4
                var referenceTime = addMinutes(startDate, getRandomInt(7, 15));
                generateKeeper(stores[i].id, referenceTime, true);
                var visitors = getRandomInt(3, 7);
                var visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m = 0; m < visitors; ++m) {
                    generateVisitors(stores[i].id, visitorTime);
                    visitorTime = addMinutes(visitorTime, getRandomInt(10, 16));
                }
                var snapshotTime = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime, getRandomInt(visitors - 1, visitors));
            }
            if (startDate.getHours() == 17) {
                //5
                var referenceTime = startDate;
                var visitors_8 = getRandomInt(8, 11);
                var visitorTime_8 = addMinutes(referenceTime, getRandomInt(5, 7));
                for (var m_8 = 0; m_8 < visitors_8; ++m_8) {
                    generateVisitors(stores[i].id, visitorTime_8);
                    visitorTime_8 = addMinutes(visitorTime_8, getRandomInt(5, 7));
                }
                var snapshotTime_8 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_8, getRandomInt(visitors_8 - 1, visitors_8));
            }
            if (startDate.getHours() == 18) {
                //6
                var referenceTime = addMinutes(startDate, getRandomInt(7, 15));
                generateKeeper(stores[i].id, referenceTime, false);
            }
            if (startDate.getHours() == 19) {
                //7
                var referenceTime = addMinutes(startDate, getRandomInt(7, 15));
                generateKeeper(stores[i].id, referenceTime, true);
                var visitors = getRandomInt(9, 11);
                var visitorTime = addMinutes(referenceTime, getRandomInt(6, 7));
                for (var m = 0; m < visitors; ++m) {
                    generateVisitors(stores[i].id, visitorTime);
                    visitorTime = addMinutes(visitorTime, getRandomInt(10, 16));
                }
                var snapshotTime = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime, getRandomInt(visitors - 1, visitors));
            }
            if (startDate.getHours() == 20) {
                //8
                var referenceTime = startDate;
                var visitors_9 = getRandomInt(10, 12);
                var visitorTime_9 = addMinutes(startDate, getRandomInt(5, 7));
                for (var m_9 = 0; m_9 < visitors_9; ++m_9) {
                    generateVisitors(stores[i].id, visitorTime_9);
                    visitorTime_9 = addMinutes(visitorTime_9, getRandomInt(10, 16));
                }
                var snapshotTime_9 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_9, getRandomInt(visitors_9 - 1, visitors_9));
            }
            if (startDate.getHours() == 21) {
                //9
                var referenceTime = startDate;
                var visitors_10 = getRandomInt(10, 12);
                var visitorTime_10 = addMinutes(startDate, getRandomInt(5, 7));
                for (var m_10 = 0; m_10 < visitors_10; ++m_10) {
                    generateVisitors(stores[i].id, visitorTime_10);
                    visitorTime_10 = addMinutes(visitorTime_10, getRandomInt(5, 7));
                }
                var snapshotTime_10 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_10, getRandomInt(visitors_10 - 1, visitors_10));
            }
            if (startDate.getHours() == 22) {
                //9
                var referenceTime = startDate;
                var visitors_11 = getRandomInt(10, 12);
                var visitorTime_11 = addMinutes(startDate, getRandomInt(5, 7));
                for (var m_11 = 0; m_11 < visitors_11; ++m_11) {
                    generateVisitors(stores[i].id, visitorTime_11);
                    visitorTime_11 = addMinutes(visitorTime_11, getRandomInt(5, 7));
                }
                var snapshotTime_11 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_11, getRandomInt(visitors_11 - 1, visitors_11));
            }
            if (startDate.getHours() == 23) {
                //9
                var referenceTime = startDate;
                var visitors_12 = getRandomInt(10, 12);
                var visitorTime_12 = addMinutes(startDate, getRandomInt(5, 7));
                for (var m_12 = 0; m_12 < visitors_12; ++m_12) {
                    generateVisitors(stores[i].id, visitorTime_12);
                    visitorTime_12 = addMinutes(visitorTime_12, getRandomInt(5, 7));
                }
                var snapshotTime_12 = addHours(referenceTime, 1);
                generateOccupancy(stores[i].id, snapshotTime_12, getRandomInt(visitors_12 - 1, visitors_12));
            }
            if (startDate.getHours() == 24) {
                // 10
                var referenceTime = addMinutes(startDate, getRandomInt(7, 15));
                generateKeeper(stores[i].id, referenceTime, false);
            }
        }
    }
}
var string = "";
for (var i = 0; i < sqls.length; ++i) {
    string = string.concat(sqls[i]);
}
console.log(string);
