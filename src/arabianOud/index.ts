let stores = [
  {
    id: 1,
  },
];

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000);
}

function getRandomInt(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomWithProbability(): number {
  var notRandomNumbers = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  var idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}
let sqls: any = [];
const generateKeeper = (storeId, date: Date, presence) => {
  let crud = new Date();
  let sql = `INSERT INTO keepers ("storeId", "snapshotTime", presence, "createdAt", "updatedAt") values (${storeId},'${date.toISOString()}', ${presence}, '${crud.toISOString()}', '${crud.toISOString()}');`;
  sqls.push(sql);
};
const generateVisitors = (storeId, date: Date) => {
  let crud = new Date();
  let sql = `INSERT INTO visitors ("storeId", "enterTime","createdAt", "updatedAt") values (${storeId},'${date.toISOString()}', '${crud.toISOString()}', '${crud.toISOString()}');`;
  sqls.push(sql);
};

const generateOccupancy = (storeId, date: Date, count) => {
  let crud = new Date();
  let sql = `INSERT INTO occupancies ("storeId", "snapshotTime",count,"createdAt", "updatedAt")  values (${storeId},'${date.toISOString()}',${count},'${crud.toISOString()}', '${crud.toISOString()}');`;
  sqls.push(sql);
};
const addHours = function (date, h) {
  date.setTime(date.getTime() + h * 60 * 60 * 1000);
  return date;
};

for (let i = 0; i < stores.length; ++i) {
  const currentDate = new Date(); // get the current date
  let startDate = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  startDate.setDate(startDate.getDate() + 1);
  for (let x = 0; x < 364; ++x) {
    for (let hour = 1; hour <= 24; ++hour) {
      startDate = addHours(startDate, 1);
      let startHour = getRandomInt(8, 10)
      if (startDate.getHours() == 8) {
        if (startHour === 8) {

          let referenceTime = startDate;
          let shopKeeperEnterTime = addMinutes(
            startDate,
            getRandomInt(45, 60) // 1 to 10 minutes
          );
          generateKeeper(stores[i].id, shopKeeperEnterTime, true);
          let visitors = getRandomInt(3, 5);
          let visitorTime = addMinutes(shopKeeperEnterTime, getRandomInt(5, 7));
          for (let m = 0; m < visitors; ++m) {
            generateVisitors(stores[i].id, visitorTime);
            visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
          }
          let snapshotTime = addHours(referenceTime, 1);
          generateOccupancy(
            stores[i].id,
            snapshotTime,
            getRandomInt(visitors - 1, visitors)
          );
        }
      }

      if (startDate.getHours() == 9) {
        let referenceTime = startDate;
        if (startHour === 9) {
          let shopKeeperEnterTime = addMinutes(
            startDate,
            getRandomInt(0, 45) // 1 to 10 minutes
          );
          generateKeeper(stores[i].id, shopKeeperEnterTime, true);
        }
        let visitors = getRandomInt(4, 8);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 10) {
        let referenceTime = startDate;
        let visitors = getRandomInt(5, 8);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 11) {
        let referenceTime = startDate;
        let visitors = getRandomInt(5, 8);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }


      if (startDate.getHours() == 12) {
        let referenceTime = startDate;
        let visitors = getRandomInt(15, 18);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 13) {
        let referenceTime = startDate;
        let visitors = getRandomInt(15, 18);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 14) {
        let referenceTime = startDate;
        let visitors = getRandomInt(15, 18);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 15) {
        let referenceTime = addMinutes(startDate, getRandomInt(7, 15));
        generateKeeper(stores[i].id, referenceTime, false);
      }
      if (startDate.getHours() == 16) {
        //4
        let referenceTime = addMinutes(startDate, getRandomInt(7, 15));
        generateKeeper(stores[i].id, referenceTime, true);
        var visitors = getRandomInt(3, 7);
        var visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (var m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(10, 16));
        }
        var snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }

      if (startDate.getHours() == 17) {
        //5
        let referenceTime = startDate;
        let visitors = getRandomInt(8, 11);
        let visitorTime = addMinutes(referenceTime, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 18) {
        //6
        let referenceTime = addMinutes(startDate, getRandomInt(7, 15));
        generateKeeper(stores[i].id, referenceTime, false);
      }
      if (startDate.getHours() == 19) {
        //7
        let referenceTime = addMinutes(startDate, getRandomInt(7, 15));
        generateKeeper(stores[i].id, referenceTime, true);
        var visitors = getRandomInt(9, 11);
        var visitorTime = addMinutes(referenceTime, getRandomInt(6, 7));
        for (var m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(10, 16));
        }
        var snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 20) {
        //8
        let referenceTime = startDate;
        let visitors = getRandomInt(10, 12);
        let visitorTime = addMinutes(startDate, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(10, 16));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }
      if (startDate.getHours() == 21) {
        //9
        let referenceTime = startDate;
        let visitors = getRandomInt(10, 12);
        let visitorTime = addMinutes(startDate, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }

      if (startDate.getHours() == 22) {
        //9
        let referenceTime = startDate;
        let visitors = getRandomInt(10, 12);
        let visitorTime = addMinutes(startDate, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }

      if (startDate.getHours() == 23) {
        //9
        let referenceTime = startDate;
        let visitors = getRandomInt(10, 12);
        let visitorTime = addMinutes(startDate, getRandomInt(5, 7));
        for (let m = 0; m < visitors; ++m) {
          generateVisitors(stores[i].id, visitorTime);
          visitorTime = addMinutes(visitorTime, getRandomInt(5, 7));
        }
        let snapshotTime = addHours(referenceTime, 1);
        generateOccupancy(
          stores[i].id,
          snapshotTime,
          getRandomInt(visitors - 1, visitors)
        );
      }


      if (startDate.getHours() == 24) {
        // 10
        let referenceTime = addMinutes(startDate, getRandomInt(7, 15));
        generateKeeper(stores[i].id, referenceTime, false);
      }
    }
  }
}

let string = "";
for (let i = 0; i < sqls.length; ++i) {
  string = string.concat(sqls[i]);
}
console.log(string);
