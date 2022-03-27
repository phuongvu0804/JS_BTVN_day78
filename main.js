var originalArray = [];
var negativeArray = [];
var positiveArray = [];

//Hàm tạo mảng chỉ có các phần tử dương
function positiveCollectHandler(number) {
  if (number >= 0) {
    positiveArray.push(number);
  }

  return positiveArray;
}

//Hàm tạo mảng chỉ có các phần tử âm
function negativeCollectHandler(number) {
  if (number < 0) {
    negativeArray.push(number);
  }
  return negativeArray;
}

//Hàm tính tổng
function sumHandler(array) {
  var sum = 0;
  var length = array.length;
  for (var i = 0; i < length; i++) {
    sum += array[i];
  }
  return sum;
}

//Hàm tìm số nhỏ nhất
function minFindHandler(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    var element = array[i];
    if (min <= element) {
      min = min;
    } else {
      min = element;
    }
  }
  return min;
}

function negativeSumHandler(negativeArray) {
  var sum = 0;
  var length = negativeArray.length;
  for (var i = 0; i < length; i++) {
    sum += negativeArray[i];
  }
  return sum;
}

//Tạo mảng, phân loại mảng và hiển thị mảng được tạo
document.getElementById("addBtn").onclick = function () {
  var numberInput = document.getElementById("numb_1").value * 1;
  originalArray.push(numberInput);

  positiveArray = positiveCollectHandler(numberInput);
  negativeArray = negativeCollectHandler(numberInput);

  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML = noti_arrayDisplay;
};

//1. Tính tổng các số dương trong mảng
document.getElementById("sumBtn").onclick = function () {
  var positiveNumbSum = sumHandler(positiveArray);
  var noti_positiveSum = "";

  //noti += '<div>Có ' + negativeQuanti + ' số âm.</div>';
  var noti_positiveSum = "<div>Tổng các số dương là: " + positiveNumbSum + "</div>";
  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML =
    noti_arrayDisplay + noti_positiveSum;
};

//2. Đếm các số dương trong mảng
document.getElementById("countPositiveBtn").onclick = function () {
  var positiveQuanti = positiveArray.length;

  var noti_positiveNumb = "<div>Có " + positiveQuanti + " số dương trong mảng.</div>";
  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML =
    noti_arrayDisplay + noti_positiveNumb;
};

//3. Tìm số dương nhỏ nhất trong mảng
document.getElementById("findSmallPosiBtn").onclick = function () {
  var result = minFindHandler(positiveArray);

  var noti_smallestNumb = "<div>Số dương nhỏ nhất trong mảng là:  " + result + ".</div>";
  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML =
    noti_arrayDisplay + noti_smallestNumb;
};

//4. Tìm số nhỏ nhất trong mảng
document.getElementById("findSmallestBtn").onclick = function () {
  var result = minFindHandler(originalArray);

  var noti_smallestNumb = "<div>Số nhỏ nhất trong mảng là:  " + result + ".</div>";
  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML =
    noti_arrayDisplay + noti_smallestNumb;
};

//5. Tìm số chẵn cuối cùng trong mảng
document.getElementById("findLastEvenBtn").onclick = function () {
  var length = originalArray.length;
  var result = 0;
  for (var i = 1; i <= length; i++) {
    var checkedIndex = length - i;
    var checkedElement = originalArray[checkedIndex];
    if (checkedElement % 2 === 0) {
      result = checkedElement;
      break;
    } else {
      result = -1;
    }
  }

  var noti_arrayDisplay =
    "<div>Mảng được tạo là: " + originalArray + " .</div>";
  var noti_lastEvenNumb = "<div>Số chẵn cuối cùng trong mảng là:  " + result + ".</div>";
  document.getElementById("inforDisplay").innerHTML =
    noti_arrayDisplay + noti_lastEvenNumb;
};

//6. Đổi chỗ 2 giá tị trong mảng theo vị trí
  document.getElementById("positionDisplayBtn").onclick = function () {
  document.querySelector(".position-change__wrapper").style.display = "block";
};

document.getElementById("changePositionBtn").onclick = function () {
  var positionInput1 =
    document.getElementById("position-change_input1").value * 1;
  var positionInput2 =
    document.getElementById("position-change_input2").value * 1;
  var index1 = positionInput1 - 1;
  var index2 = positionInput2 - 1;

  var element_1 = originalArray[index1];
  var element_2 = originalArray[index2];

  originalArray.splice(index1, 1, element_2);
  originalArray.splice(index2, 1, element_1);

  var noti_changePosition = "<div>Mảng mới được tạo là: " + originalArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML = noti_changePosition;
};

//7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById('arrangeBtn').onclick = function() {
  var a;
  var originalLength = originalArray.length;
  for (var i = 0; i < originalLength - 1; i++) {
    var element1 = originalArray[i];
    console.log(`phần tử thứ ${i} là ${element1}`)

    for (var j = i + 1; j < originalLength; j++) {
      var element2= originalArray[j];
      if(originalArray[i] > originalArray[j]) {
        a = originalArray[i];
        originalArray[i] = originalArray[j];
        originalArray[j] = a; 
        console.log(`lần j ${j} mảng mới ${originalArray}, phần tử cuối ${element1}`)

      }
    }
  }

  var noti_arrange  = '<div>Mảng mới được tạo (theo tứ tự tăng dần) là: '+ originalArray + ' .</div>';
  document.getElementById('inforDisplay').innerHTML = noti_arrange;
}


//8. Tìm số nguyên tố đầu tiên trong mảng
document.getElementById("primeFindBtn").onclick = function () {
  var result = 0;
  for (var i = 0; i < originalArray.length; i++) {
    var element = originalArray[i];

    if (element < 2) {
      element = -1;
      console.log(element);
      continue;
    } else {
      result = primeCheck(element);
    }

    if (result) {
      break;
    } else {
      console.log(element);
      element = -1;
    }
  }

  var noti_arrayDisplay = "<div>Mảng được tạo là: " + originalArray + " .</div>";
  var noti_prime = "<div>Số nguyên tố đầu tiên của mảng là: " + element + " .</div>";
  document.getElementById("inforDisplay").innerHTML = noti_arrayDisplay + noti_prime;
};

function primeCheck(element) {
  var isPrime = true;
  for (var j = 2; j <= element - 1; j++) {
    if ((element % j) !== 0) {
      isPrime = true;
    } else {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
}

//9. Nhập thêm 1 mảng số thực. Tìm xem trong mảng có bao nhiêu số nguyên
var realNumbArray = [];
var realPositiveArray = [];
var realNegativeArray = [];

//Tạo giao diện mới
document.getElementById("realNumberBtn").onclick = function () {
  document.querySelector("#realNumber_wrapper").style.display = "block";
  document.querySelector("#findIntergerBtn").style.display = "block";
  document.querySelector("#compareQuantiBtn").style.display = "block";
  document.querySelector("#numb1_wrapper").style.display = "none";
};

//Lấy thông tin nhập vào, phân loại mảng (phục vụ cho bài sau)
document.getElementById("addRealBtn").onclick = function () {
  var realNumb = document.getElementById("realNumb").value * 1;
  realNumbArray.push(realNumb);

  realPositiveArray = positiveCollectHandler(realNumb);
  realNegativeArray = negativeCollectHandler(realNumb);

  var noti_arrayDisplay = "<div>Mảng số <b>thực</b> được tạo là: " + realNumbArray + " .</div>";
  document.getElementById("inforDisplay").innerHTML = noti_arrayDisplay;
};

//Đếm số nguyên
document.getElementById("findIntergerBtn").onclick = function () {
  var realQuanti = 0;
 for (var i = 0; i < realNumbArray.length; i++) {
   var realNumb = realNumbArray[i];
   if((realNumb % 1) === 0) {
     realQuanti++;
   } else {
     continue;
   }
 }

  var noti_arrayDisplay = "<div>Mảng số thực được tạo là: " + realNumbArray + " .</div>";
  var noti_integerQuanti = "<div>Có " + realQuanti + " số nguyên trong mảng.</div>";
  document.getElementById("inforDisplay").innerHTML = noti_arrayDisplay + noti_integerQuanti;
};

//10. So sánh số lượng số dương và âm trong mảng số thực
document.getElementById("compareQuantiBtn").onclick = function () {
  var positiveQuanti = realPositiveArray.length;
  var negativeQuanti = realNegativeArray.length;
  var result = '';
  if (positiveQuanti > negativeQuanti) {
    result = 'nhiều hơn';
  } 
  else if (positiveQuanti == negativeQuanti) {
    result = 'bằng';
  }
  else {
    result = 'ít hơn';
  }


  var noti_arrayDisplay = "<div>Mảng được tạo là: " + realNumbArray + " .</div>";
  var noti_compare = "<div>Số lượng số dương của mảng " + result + " số lượng số âm .</div>";
  document.getElementById("inforDisplay").innerHTML = noti_arrayDisplay + noti_compare;
};
