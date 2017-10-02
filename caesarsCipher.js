


function rot13(str) { // LBH QVQ VG!
  var Arr = [];
  var num;
  for (var i in str){
    console.log(str.charCodeAt(i));


  if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77){
    // + 13
    num = str.charCodeAt(i);
    Arr.push(String.fromCharCode(num + 13));
  }

  else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
    // -13
    num = str.charCodeAt(i);
    Arr.push(String.fromCharCode(num - 13));
  } else {
    Arr.push(String.fromCharCode(str.charCodeAt(i)));
  }

} // end for-loop
  return Arr.join("");
}

// Change the inputs below to test


console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
//SERR PBQR PNZC
//GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.
