const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  var containsGoldBagCount = 0;
  var bagsDict = {};
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
    var arr = line.split("contain");
    var bagName = arr[0].replace("bags","");
    var contents = arr[1];
    bagsDict[bagName] = {};
    if(contents.includes("no other bags"))
    {
        continue;
    }
    if(contents.includes("shiny gold bag"))
      containsGoldBagCount++;
    contents = contents.replace('.','');
    var contentBagTypes = contents.split(',');
    for(var bagType of contentBagTypes)
    {
        var bagTypeParts = bagType.trim().split(' ');
        var count = bagTypeParts[0];
        var name = bagTypeParts[1]+' '+bagTypeParts[2];
        bagsDict[bagName][name]=count;
    }
  }
  console.log("count:"+containsGoldBagCount);
  return bagsDict;
}




app.listen(port, () => console.log('Example app listening on port ' + port));