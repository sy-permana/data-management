(function(){
    var data = {
        listData : [
            {firstName : "Surya Permana", lastName : "Kusuma", nationality : "Indonesia", phoneNum : "85156295081"},
            {firstName : "Meiva", lastName : "Evangelista", nationality : "Indonesia", phoneNum : "85156669023"},
            {firstName : "Verastella", lastName : "Arkanham", nationality : "Singapore", phoneNum : "866678929"},
            {firstName : "Chiko Jeriko", lastName : "Lost in Yu", nationality : "Thailand", phoneNum : "12234325334253"},
        ],
        init : function() {
            this.cacheDom();
            this.bindEvent();
            this.rander();
        },
        cacheDom : function() {
            this.el = document.getElementById('data');
            this.input = document.getElementsByClassName('a');
            this.button = document.getElementById('add');
            this.firstName = document.getElementById('first-name');
            this.lastName = document.getElementById('last-name');
            this.nationality = document.getElementById('nations');
            this.phoneNum = document.getElementById('phone-num');
        },
        bindEvent : function(){
            this.button.addEventListener("click", this.addData.bind(this));
        },
        rander : function() {
            let data = this.listData;
            let newData = '';
            for (let i = 0; i < data.length; i++) {
                newData += `
                    <tr>
                        <td>${data[i].firstName}</td>
                        <td>${data[i].lastName}</td>
                        <td>${data[i].nationality}</td>
                        <td class="phone">${this.cencorPhone(data[i].phoneNum, data[i].nationality)}</td>
                        <td class="last">delete</td>
                    </tr>`;
            }
            return this.el.innerHTML = newData;
        },
        addData: function(){
            let newData = {
                firstName : this.firstName.value, 
                lastName : this.lastName.value, 
                nationality : this.nationality.value, 
                phoneNum : this.phoneNum.value
            };
            this.listData.push(newData);
            this.rander();
        },
        cencorPhone : function(num, code) {
            switch (code) {
                case 'Indonesia' :
                    code = `(+62)`;
                    break;
                case 'Malaysia' :
                    code = `(+60)`;
                    break;
                default :
                    code = `(+99)`;
            }
            let output = code+' ';
            for (let i = 0; i < 8; i++) {
                if (i > 4) {
                    output += '*';
                } else {
                    output += num[i];
                }
            }
            return output;
        }
    }
    data.init();
})();