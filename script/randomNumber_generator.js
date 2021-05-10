
        //產生四個數字，可以重覆
        function digits_repeatable(x) {
            var result='';
            for (let i=1;i<=x;i++){
                var a = Math.floor(Math.random() * 10);
                result+=a;
            }
            return result;
            //法二
            // document.write(String(Math.floor(Math.random() * 9000 + 1000)).split(""), "<br>")
        };
        // digits_repeatable(length);
        document.getElementById('random1').setAttribute('value',digits_repeatable(4));


        //產生四個數字，不可以重覆  

        function digits_unreaptable() {
            var result = '';
            for (let i = 1; i <= 4; i++) {
                var a = Math.floor(Math.random() * 10);
                if (result.indexOf(a) != -1) {
                    i = i - 1;
                    continue;
                }
                else {

                    result += a;

                }

            }
            return result;
        }
        document.getElementById('random2').setAttribute('value',digits_unreaptable());
      

        //產生四個由數字和大寫英文字母組成
        function digstr_generator(length) {
            var result1 = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var charactersLength = characters.length;
            for (var j = 0; j < length; j++) {
                b = (characters.charAt(Math.floor(Math.random() * charactersLength)));
                result1 += b;
            }
            return result1;

        }
        document.getElementById('random3').setAttribute('value',digstr_generator(4));  
    