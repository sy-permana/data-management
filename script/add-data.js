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
            this.input = document.getElementsByClassName('input');
            this.button = document.getElementById('add');
            this.del = document.getElementsByClassName('delete');
            this.firstName = document.getElementById('first-name');
            this.lastName = document.getElementById('last-name');
            this.nationality = document.getElementById('nations');
            this.phoneNum = document.getElementById('phone-num');
        },
        bindEvent : function(){
            this.button.addEventListener("click", this.addData.bind(this));
            this.el.addEventListener("click", this.removeData.bind(this));
        },
        rander : function() {
            let data = this.listData;
            let newData = '';
            for (let i = 0; i < data.length; i++) {
                newData += `
                    <tr>
                        <td class="capitalize">${data[i].firstName}</td>
                        <td class="capitalize">${data[i].lastName}</td>
                        <td class="capitalize">${data[i].nationality}</td>
                        <td class="phone">${this.cencorPhone(data[i].phoneNum, data[i].nationality)}</td>
                        <td class="last delete"><button id="${i}">x</button></td>
                    </tr>`;
            }
            return this.el.innerHTML = newData;
        },
        validation : function() {
            let result = false;
            const firstName = this.firstName.value;
            const lastName = this.lastName.value;
            const nationality = this.nationality.value;
            const phoneNum = this.phoneNum.value;
            const textonly = /^[a-z A-Z]+$/;
            const phone = /^[0-9]+$/;
            if (textonly.test(firstName) === false) {
                alert('first name should contain only string');
            } else if (textonly.test(lastName) === false) {
                alert('last name should contain only string');
            } else if (!nationality) {
                alert('please select nationality');
            } else if (phone.test(phoneNum) === false || phoneNum.length < 6 || phoneNum.length > 12) {
                if (phone.test(phoneNum) === false) {
                    alert ('phone should contain number only');
                } else if (phoneNum.length < 6 || phoneNum.length > 12) {
                    alert ('invalid phone number (should between 6 to 12 digit)'+phoneNum.length);
                }
            } else {
                result = true;
            }
            return result;
        },
        addData: function(){
            if(this.validation()) {
                let newData = {
                    firstName : this.firstName.value, 
                    lastName : this.lastName.value, 
                    nationality : this.nationality.value, 
                    phoneNum : this.phoneNum.value
                };
                this.listData.push(newData);
                this.rander();
                this.clearForm();
            }
        },
        removeData: function(event) {
            let target = event.target
            if (target.tagName === "BUTTON") {
                let id = target.id;
                this.listData.splice(id, 1);
                this.rander();
            }
            
        },
        cencorPhone : function(num, code) {
            switch (code) {
                case 'Indonesia' :
                    code = `(+62)`;
                    break;
                case 'Malaysia' :
                    code = `(+60)`;
                    break;
                case 'Singapore' :
                    code = `(+65)`;
                    break;
                case 'Brunei' :
                    code = `(+673)`;
                    break;
                case `Vietnam`:
                    code = `(+84)`;
                    break;
                case `Thailand` :
                    code = `(+66)`;
                    break;
                case `Philipine` :
                    code = `(+63)`;
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
        },
        clearForm : function () {
            let forms = this.input;

            for (let i = 0; i < forms.length; i++) {
                forms[i].value = "";
            }
        }
    }
    data.init();
})();