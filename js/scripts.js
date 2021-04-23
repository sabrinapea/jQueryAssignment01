
    $(function() {
        $('h2').css({'border':'solid black 1px',
            'color': '#CC1C0D',
            'padding': '3px 20px',
            'border-radius': '0 5px 0 5px',
            'background-color': '#DFE3E6'}),
        $('ul li').addClass('navigation');
        $('.navigation').css('border','solid #929CA4 1px'),
        $('.navigation').css('background-color','#DFE3E6'),
        $('.navigation a').css('color', '#CC1C0D'),
        $('.navigation a').css('padding','3px 0 3px 15px'),
        $('ul').css('padding', '0'),
        $('.vprospect').remove(),
        $('.vconvert').remove(),
        $('.vretain').remove(),
        $('aside').append('Chevy Dealers Association'),
        $('aside p:first-of-type').css('font-style','italic')
        // 16 -19:
        // $('body').append(`<input type="button" value="Click Me Here" /><input type="button" value="Click Number 2" />`)
        //     // .click(function(event) { // click method
        //     // .bind('click', function(event) { // bind method
        //     .on('click', function(event) {
        //        window.alert('Hello, you clicked the button.');
        //    });
        // 20
        // $('body').addClass('selected').css('width : 400px','height : 400px'),
        // $('body').on({
        //     mouseenter: function() {
        //         window.alert('Hovered over the selected area');
        //     },
        //     mouseleave: function() {
        //         window.alert('The mouse left the selected area');
        //     },
        //     click: function() {
        //         window.alert('You clicked the selected area.');
        //     }
        // });
        // //21  
        // $('div').on({
        //     mouseenter: function() {
        //         window.console.log('Hovered over the selected area');
        //     },
        //     mouseleave: function() {
        //         window.console.log('The mouse left the selected area');
        //     },
        //     click: function() {
        //         console.log('You clicked the selected area.');
        //     }
        // });
        //22
        // $(document).ready(function() {
        //     $('div').click(function(event) {
        //         event.preventDefault ();
        //         $('div').html('http://www.modulemedia.com');
        //             $('div').click(function(event){
        //                 $('div').css('color','red')
        //         });
        //         console.log(event.target.nodeName + ' triggered the event!');              
        //     });
        // });
        //23
        // $(window).resize(function () {
        //     $('div').text($(window).width().height());
        // });

        //24
        // $(document).ready(function() {
        //     $('div').append('<input type="text" name="mytext[]" class="field"</>');
        //     $(this).focus(function () {
        //         $('input').css('background-color', 'light gray'); 
        //         alert('focus is called');                 
        //     });
        //     $('input').off('focus') 
        // });
        //25
        // $(document).ready(function() {
        //     $('div#form1').append(
        //         $('<input>', {
        //             type: 'text',
        //             id: 'vname',
        //             name: 'name',
        //             placeholder: 'Your Name'
        //         }),
        //         $('<input>', {
        //             type: 'text',
        //             id: 'vemail',
        //             name: 'email',
        //             placeholder: 'Your Email'
        //         }), $('<br/>'), $('<input/>', {
        //             type: 'submit',
        //             id: 'submit',
        //             value: 'Submit'
        //         }));
        //     $('div#form1').focus();
        //     $('submit').click(function(event) {
        //         let isValid = true;
        //         let enterName = $('#vname').val().trim();
        //         if (enterName == '') {
        //             $('#vname').next().text('This field is required');
        //             isValid = false;
        //             $('#vname').css('border','1px').css('color','red');
        //         } else {
        //             $('#vname').next().text('');
        //         }
        //         $('#vname').val(enterName).css('border','1px').css('color','green');

        //         var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        //         let enterEmail = $('#vemail').val().trim();
        //         if (enterEmail == '') {
        //             $('#vemail').next().text('Must be a valid email address.');
        //             isValid = false;
        //         } else if ( !emailPattern.test(enterEmail)) {
        //             $('#vemail').next().text('Must be a valid email address.');
        //             $('#email').css('border','1px').css('color','red');
        //             isValid = false;
        //         } else {
        //             $('#vemail').val(email);
        //         }
        //         $('#vemail').val(email).css('border','1px').css('color','green');

        //         if(isValid == false) {
        //             event.preventDefault();
        //         }
        //     })                   
        // });   
    });

