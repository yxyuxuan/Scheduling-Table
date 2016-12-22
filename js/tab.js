/**
 * Created by CEPG on 2016/11/11.
 */
$(function() {
    var vm = new Vue({
        el: "#vel",
        data: {
            persons:[
                {
                    name: '文竹',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '许蕊',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                     days: []
                },{
                    name: '陈娟',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '夏云',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '绳颖',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '郭香兰',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '刘姗姗',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '张雨辰',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '刘晓玉',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '李亚军',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '韩雨晴',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '程黎明',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name: '李霞玲',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'陈玲',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'陈玉兰',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张金宝',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'周玉茹',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张婷婷',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'刘珊珊(小)',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'王玲玲',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张晓嘉',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'贾璇璇',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'王明月',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'马欣欣',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'徐学媛',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张田田',
                    depart:'depart2',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'王淑',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'王欢',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'贾汐',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'彭丽',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'董晨',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张思凤',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'朱全智',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'胡洁敏',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'赵苏宁',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'周娟娟',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张文静',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'徐菁华',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'张怡婷',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                },{
                    name:'凌天涵',
                    depart:'depart1',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true},{name: '文件监视查看', enabled: true},{name: '修改库文件', enabled: true},{name: '新闻联播监播', enabled: true},{name: '库文件检查', enabled: true}],
                    days: []
                }
            ],
            styles:['操作','姓名 :','部门 :','副班','正常上传','正常初审','正常终审','历史数据','手工采集','文件监视查看','修改库文件','新闻联播监播','库文件检查'],
            workStyles:['副班','正常上传','正常初审','正常终审','历史数据','手工采集','文件监视查看','修改库文件','新闻联播监播','库文件检查']
        },

        methods: {

            initDays: function () {
               var today = new Date();
                var first_day = new Date(today.getFullYear(), today.getMonth(), 1);
                for (var i = 0; i < 31; i++) {
                    var date = new Date(first_day.getTime() + i * 86400 * 1000);
                    if (date.getMonth() != today.getMonth()) {
                        break;
                    }
                    for (var j = 0; j < this.persons.length; j++) {
                        var day = {
                            date: date.toString(),
                            work: true,
                            jobs: []
                        };
                        this.persons[j].days.push(day);
                    }
                }
            },

            filterEnablePositions: function (positions) {
                return positions.filter(function (x) {
                    return x.enabled;
                });
            },

            changeWork: function (day) {
                day.work = !day.work;
            },

            changePositions: function (position) {
                position.enabled = !position.enabled;
            },

            showBox: function (pidx, didx) {
                var obo = document.getElementById("box" + pidx + "_" + didx);
                if (obo.style.display == "none") {
                    obo.style.display = "block";
                }
                else obo.style.display = "none";
            },

            submitBox: function (day, pidx, didx) {
                var oBox = document.getElementById("box" + pidx + "_" + didx);
                var boxList = oBox.getElementsByTagName("input");
                var values = [];
                for (var i = 0; i < boxList.length; i++) {
                    if (boxList[i].checked) {
                        values.push(boxList[i].value);
                    }
                }

                if (day.work) {
                    day.jobs = values;
                }

                oBox.style.display = 'none';
            },

            getJobCount: function (day, pos) {
                var date = day - 1;
                var count = 0;
                for (var i = 0; i < this.persons.length; i++) {
                    var person = this.persons[i];

                    var found = person.days[date];
                    if (!found) {
                        return 0;
                    }
                    if (person.days[date].work) {
                        for (var j = 0; j < person.days[date].jobs.length; j++) {
                            if (person.days[date].jobs[j] == pos) {
                                count++;
                            }
                        }
                    }

                }
                return count;
            },

            getJobPersons: function (pos, day) {
                var date = day - 1;
                var values = [];
                for (var i = 0; i < this.persons.length; i++) {
                    var person = this.persons[i];

                    var found = person.days[date];
                    if (!found) {
                        return 0;
                    }
                    if (person.days[date].work) {
                        for (var j = 0; j < person.days[date].jobs.length; j++) {
                            if (person.days[date].jobs[j] == pos) {
                                values.push(person.name);
                            }
                        }
                    }
                }
                return values.join('');
            },

            setJobPersons: function(workStyle, didX, values) {
                for (var i = 0; i < this.persons.length; i++) {
                    var person = this.persons[i];
                    if(values.includes(person.name)){
                        if(!person.days[didX].jobs.includes(workStyle)){
                            person.days[didX].jobs.push(workStyle);
                        }

                    } else {
                        for(var j=0;j<person.days[didX].jobs.length;j++){
                            if(person.days[didX].jobs[j]==workStyle){
                                person.days[didX].jobs.splice(j,1);
                            }
                        }
                    }
                }
            },

            getJobAllPersons:function(pos, day){
                var date=day-1;
                var values = [];
                for (var i = 0; i < this.persons.length; i++) {
                    var person = this.persons[i];

                    var found = person.days[date];
                    if (!found) {
                        return 0;
                    }
                    if (person.days[date].work) {
                        for(var j=0;j<person.positions.length;j++){
                            if(person.positions[j].name==pos){
                                if(person.positions[j].enabled){
                                    values.push(person.name);
                                }
                            }
                        }
                    }
                }
                return values;
            },

            secShowBox: function (widX,didX) {
                var secBo = document.getElementById("secBox" + widX + "_" + didX);
                if (secBo.style.display == "none") {
                    secBo.style.display = "block";
                }
                else secBo.style.display = "none";
            },

           secSubmitBox: function (widX, didX,workStyle) {
                var secBox = document.getElementById("secBox" + widX + "_" + didX);
                var secBoxList = secBox.getElementsByTagName("input");
                var values = [];
                for (var i = 0; i < secBoxList.length; i++) {
                    if (secBoxList[i].checked) {
                        values.push(secBoxList[i].value);
                    }
                }

               this.setJobPersons(workStyle, didX, values);
               secBox.style.display = 'none';
            },


            saveData: function () {
                window.localStorage.setItem('data', JSON.stringify(this.persons));
            },

            loadData: function () {
                this.persons = JSON.parse(window.localStorage.getItem('data'));
            },

            addNewRow: function () {
                var person = {
                    name: 'test',
                    depart: 'depart3',
                    positions: [{name: '副班', enabled: true}, {name: '正常上传', enabled: true}, {name: '正常初审', enabled: true}, {name: '正常终审', enabled: true}, {name: '历史数据', enabled: true}, {name: '手工采集', enabled: true}, {name: '文件监视查看', enabled: true}, {name: '修改库文件', enabled: true}, {name: '新闻联播监播', enabled: true}, {name: '库文件检查', enabled: true}],
                    days: []
                };

                var today = new Date();
                var first_day = new Date(today.getFullYear(), today.getMonth(), 1);
                for (var i = 0; i < 31; i++) {
                    var date = new Date(first_day.getTime() + i * 86400 * 1000);
                    if (date.getMonth() != today.getMonth()) {
                        break;
                    }

                    var day = {
                        date: date.toString(),
                        work: true,
                        jobs: []
                    };

                    person.days.push(day);
                }

                this.persons.push(person);
                return '';
            },

            removeRow: function () {
                var chkObj = document.getElementsByClassName("chk");
                for (var k = 0; k < chkObj.length; k++) {
                    if (chkObj[k].checked) {
                        this.persons.splice(k, 1);
                    }
                }
            },

            getWorkDays: function (person) {
                var count = 0;
                for (var i = 0; i < person.days.length; i++) {
                    if (person.days[i].work) {
                        count++;
                    }

                }
                return count;
            },

            getDays: function () {
                var date = new Date();
                var year = date.getFullYear();
                var mouth = date.getMonth() + 1;
                var days;
                //当月份为二月时，根据闰年还是非闰年判断天数
                if (mouth == 2) {
                    days = year % 4 == 0 ? 29 : 28;
                }
                else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
                    //月份为：1,3,5,7,8,10,12 时，天数为31；
                    days = 31;
                }
                else {
                    //其他月份，天数为：30.
                    days = 30;
                }
                return days;
            },

            getMonths: function () {
                var date = new Date();
                var mo = date.getMonth();
                return mo + 1;
            },

            getWeeks: function (i) {
                var week_days = ['日', '一', '二', '三', '四', '五', '六'];
                return week_days[(new Date(new Date().getFullYear(), new Date().getMonth(), i)).getDay()];
            }
        }
    });
    window.vm = vm;
});
