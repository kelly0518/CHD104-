//header

$(function(){
    $(window).scroll(function(){
        let scroll_top = Math.round($(this).scrollTop())

        if(scroll_top >= 200){
            $('.hometitle').addClass('not_top');            
        }else{
            $('.hometitle').removeClass('not_top');
        }
        // console.log(scroll_top)
    });
});



$(function(){
    let $win = $(window);
    let $backToTop = $('#back_to_top');

    $backToTop.click(function(){
        $('html, body').animate({scrollTop:0}, 200);
    });
})

$(document).ready(function() {
    $("#menu").click(function() {
        $("html, body").toggleClass("no-scroll");
    });
});

// $(function () {
//     let divWidth = $('#c').width()
//     let imgCount = $('#product_card').length

//     for(let i = 0; i < imgCount; i++){
//         $('#productButton').append(`<li></li>`)

//     }
//     $('#productButton li:first').addClass('clicked')

//     $('#product_card').width(divWidth)
//     $('#r').width(divWidth * imgCount)

//     let index = 0
//     let timer = setInterval(moveToNext, 5000)

//     $('#productButton li').click(function(){
//         clearInterval(timer)
//         index = $(this).index()
//         $('#r').animate({
//             left: divWidth * index * -1,
//         })

//         $(this).addClass('clicked')
//         $('#productButton li').not(this).removeClass('clicked')
//         timer = setInterval(moveToNext, 5000)
//     })

//     function moveToNext(){
//         if(index < imgCount - 1 ){
//             index++
//         }else{
//             index = 0
//         }
//         index++

//         $('#r').animate({
//             left: divWidth * index * -1,
//         })

//         $(`#productButton li:eq(${index})`).addClass('clicked')
//         $('#productButton li').not(`:eq(${index})`).removeClass('clicked')
//     }

// });



//product information

$(document).ready(function(e){
    $(".js_btn_cart").click(function(){
        $(".in_cart").toggle();
        setTimeout(function(){
            $(".in_cart").hide();
        }, 1000);
    })
})

//Q&A

$(document).ready(function () {
    // 問題和答案的數據
    const qaData = {
        "退貨換貨": [
            {
                question: "如何提出退換貨要求？",
                answer: "您可以在我們的網站上的'訂單歷史'頁面中找到相應的訂單，然後點擊“申請退換貨”按鈕，按照指示填寫相關信息。"
            },
            {
                question: "退換貨商品的條件是什麼？",
                answer: "商品必須處於未使用、未損壞、完整包裝的狀態。所有標籤和附件也應該保持原狀。"
            },
            {
                question: "退換貨是否需要支付運費？",
                answer: "一般情況下，退換貨需要客戶自行支付運費。特殊情況，如商品有缺陷或錯誤發貨，我們將承擔相關運費。"
            },
            {
                question: "如何查詢退換貨進度？",
                answer: "您可以登錄您的帳戶，查看訂單歷史頁面，以獲取有關您退換貨進度的即時信息。我們還會通過郵件通知您相關進展。"
            },
        ],
        "購物流程": [
            {
                question: "如何在Candleternity線上購買蠟燭？",
                answer: "瀏覽並選擇您喜愛的蠟燭款式。點擊商品圖片，進入商品頁面，選擇您想購買的數量，然後點擊「加入購物車」。接著，您可以選擇繼續購物或直接前往結帳。在結帳頁面，填寫必要的資訊，完成訂單即可。"
            },
            {
                question: "如何追蹤我的訂單運送狀態？",
                answer: "在您完成訂單後，我們將提供一個訂單追蹤號碼以供查詢。您可以登入您的帳戶，進入「訂單狀態」頁面查看詳細資訊，或者點擊我們發送的運送追蹤郵件中的連結。這樣您就能隨時隨地追蹤您的蠟燭訂單運送狀態。"
            },
            {
                question: "我可以在訂單確認後修改我的購買內容嗎？",
                answer: "很抱歉，一旦您的訂單確認完成，就無法修改內容。我們建議在確認訂單前仔細檢查您的購物車，確保您已選擇了正確的商品和數量。如果您有特殊需求或緊急情況，請立即聯絡我們的客服團隊，我們將盡力協助您處理。"
            },
            {
                question: "我如何使用優惠碼或促銷代碼？",
                answer: "在結帳頁面，您將看到一個專門用於輸入優惠碼或促銷代碼的欄位。請在該欄位輸入您的代碼，然後點擊應用。系統將計算折扣並顯示在您的訂單總金額中。請確保您輸入的代碼正確並在有效期內。"
            },
        ],
        "會員點數": [
            {
                question: "Candleternity的會員點數是如何累積的？",
                answer: "Candleternity的會員點數主要是透過您在我們官方網站上的購物活動而累積的。每次成功完成訂單，您都將獲得相應的會員點數，累積的點數可以用於後續的折扣優惠或特定禮遇。"
            },
            {
                question: "會員點數有使用期限嗎？",
                answer: "Candleternity的會員點數通常是永久有效的，但請注意，某些特殊活動或促銷可能會有點數有效期限的規定。我們建議您在會員中心查看您的點數詳情，以確保充分利用這些點數。"
            },
            {
                question: "如何兌換會員點數所得的折扣或禮品？",
                answer: "C在結帳過程中，您可以在選擇付款方式的同時查看可用的會員點數，並選擇是否使用這些點數以獲得相應的折扣。若您希望將點數用於兌換特定禮品，請進入會員中心查看可用的兌換選項，按照步驟進行兌換。"
            },
            {
                question: "會員點數是否可以轉讓給其他人？",
                answer: "很抱歉，Candleternity的會員點數一般無法轉讓給其他人。點數僅限於您的會員賬戶內使用。我們鼓勵您將點數合理使用，享受相應的會員福利。"
            },
        ],
        "會員制度": [
            {
                question: "會員制度有哪些特別的優惠？",
                answer: "Candleternity的會員將享有獨家的優惠和禮遇。這可能包括限時折扣、生日禮遇、會員專屬商品或提前購物權等多種福利。我們致力於為會員提供更多價值，讓您的每次購物都充滿驚喜。"
            },
            {
                question: "如何查詢我的會員積分？",
                answer: "您可以登入您的Candleternity會員帳戶，點擊「我的帳戶」或「會員中心」，查看您的會員積分歷史紀錄。此外，您也將在結帳頁面看到可用的會員積分，可以選擇是否使用這些積分以獲得額外的優惠。"
            },
            {
                question: "會員升級有什麼條件？",
                answer: "Candleternity的會員升級通常基於您的購物頻率、消費金額等多個因素。隨著您在我們網站上的活躍度提升，您的會員等級也可能得到提升，進而享有更多高級會員福利。詳細的會員升級條件將在會員中心提供。"
            },
            {
                question: "如何取消會員資格？",
                answer: "如果您想取消Candleternity會員資格，請聯絡我們的客服團隊。我們的工作人員將協助您處理會員資格的取消程序。請注意，取消會員資格後，您可能失去相應的會員福利。"
            },
        ]
    };


    // 生成問題和答案卡片
    function generateQACard(qaList) {
        const qaContainer = $(".qa_container");
        let qaCard = "";

        for (const qa of qaList) {
            qaCard += `
                <div class="qa_card">
                    <div class="qa_team">
                        <p class="qa_q">Q:</p>
                        <p class="qa_a">${qa.question}</p>
                    </div>
                    <div class="qa_team">
                        <p class="qa_q">A:</p>
                        <p class="qa_a">${qa.answer}</p>
                    </div>
                </div>`;
        }

        qaContainer.html(qaCard);
    }

    // 初始顯示的問題
    const initialQuestion = "退貨換貨";
    generateQACard(qaData[initialQuestion]);

    // 點擊事件處理
    $(".qa_item").click(function () {
        const selectedQuestion = $(this).text();
        generateQACard(qaData[selectedQuestion]);
    });
});


//cart +-buttom

$(function(){
    $(".minus, .plus").click(function(){
        const productId = $(this).data('product-id');
        const numElement = $(".num[data-product-id='" + productId + "']");
        let num = parseInt(numElement.text());

        if($(this).hasClass('minus') && num > 1){
            num--;
        } else if($(this).hasClass('plus')){
            num++;
        }
        numElement.text(num);
    });
});

//cart
// let shoplist = {};
// shoplist.list =[
//     {name:"夜空星辰",price:599},
//     {name:"晨曦曙光",price:599},
//     {name:"海洋寧靜",price:599},
//     {name:"徒步山林",price:599},
//     {name:"玫瑰之舞",price:399},
// ]

// let item_html="<div class='cart_card' id='butitem_{{index}}'><img src='./HomePage_Photo/晨曦曙光.jpg' alt=''><p class='product_name'>商品名稱: {{name}}</p><div class='product_n'>數量<button class='minus' data-product-id='{{index}}'>-</button><div class='num' data-product-id='{{index}}'>1</div><button class='plus' data-product-id='{{index}}'>+</button>金額: NT${{price}}</div></div>";

// let total_html="<div class='total_num'>NT${{price}}</div>"

// let total_price = 0;
// for(let i=0; i<shoplist.list.length; i++){
//     let item = shoplist.list[i];
//     total_price += item.price;
//     // console.log(total_price);


//     let current_item_html = 
//     item_html.replace("{{name}}", item.name)
//             .replace("{{index}}", i)
//             .replace("{{price}}", item.price);
    
//     $("#item_list").append(current_item_html);
// }


// function $id(id){
//     return document.getElementById(id);
// }

// function addSpot(){
//     let item_list = $id("item_list");
//     let buy = $id("buy");
//     let cart_card = document.getElementsByClassName("cart_card")[0];
//     let newCartCard = cart_card.cloneNode(true);

//     newCartCard.style.display = "block";
//     newCartCard.getElementsbyTagname("minus")[0].onclick = removeSpot;
//     item_list.insertBefore(newCartCard, buy);
// }

// function removeSpot(e){
//     let minus = e.target;
//     $id("item_list").removeChild(miuns.parentNode);
// }

// window.addEventListener("input",function(){
//     $id(".btn_buy").onclick = addSpot;

//     document.querySelector(".minus").onclick = removeSpot;
// })


// $(function(){
//     $('.btn_buy').click(function(){
//         let item = $(this).text('.cart_card')

//         $('#item_list').append(`<div>${item}</div>`)
//     })
// })


//news
$(function(){
    // let counter = 2;

    $('.more').click(function(){
        let newsItem = $('#news_card').clone(true);
        // let newsLine = $('.line').clone(true);

        // let newsId = 'news_card' + counter;
        // newsItem.attr('id', newsId);
        $('.news').append(newsItem);

        // counter++;
    });
});


//member
$(document).ready(function(e){
    $(".js_member").click(function(){
        $("#mm").css('display','block');
    });
    $(document).mouseup(function(e){
        var container = $("#mm");

        // 如果點擊事件不在 #mm 或其子元素上
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }        
    });
    // $(".submit_btn, .btn_log").click(function() {
    //     $("#mm").hide();
    // });
});


    