angular.module('LmbCityModule', [])
    .factory('Regions', [function () {
        return [
            {
                name: '北京',
                cities: ['北京市']
            }, {
                name: '天津',
                cities: ['天津市']
            }, {
                name: '上海',
                cities: ['上海市']
            }, {
                name: '重庆',
                cities: ['重庆市']
            }, {
                name: '安徽',
                cities: ['合肥市', '安庆市', ' 蚌埠市', ' 亳州市', '池州市', '滁州市', '阜阳市', '淮北市', '淮南市', '黄山市', '六安市', '马鞍山市', '铜陵市', '芜湖市', '宿州市', '宣城市']
            }, {
                name: '福建',
                cities: ['福州市', '龙岩市', '南平市', '宁德市', '莆田市', '泉州市', '三明市', '厦门市', '漳州市']
            }, {
                name: '甘肃',
                cities: ['白银市', '定西市', '嘉峪关市', '金昌市', '酒泉市', '兰州市', '临夏回族自治州', '陇南市', '平凉市', '庆阳市', '天水市', '武威市', '张掖市', '甘南市']
            }, {
                name: '广东',
                cities: ['潮州市', '东莞市', '佛山市', '广州市', '河源市', '惠州市', '江门市', '揭阳市', '茂名市', '梅州市', '清远市', '汕头市', '汕尾市', '韶关市', '深圳市', '阳江市', '云浮市', '湛江市', '肇庆市', '中山市', '珠海市']
            }, {
                name: '广西',
                cities: ['百色市', '北海市', '防城港市', '贵港市', '桂林市', '河池市', '贺州市', '来宾市', '柳州市', '南宁市', '钦州市', '梧州市', '玉林市', '崇左市']
            }, {
                name: '贵州',
                cities: ['安顺市', '毕节市', '贵阳市', '六盘水市', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州', '铜仁市']
            }, {
                name: '海南',
                cities: ['儋州市', '东方市', '海口市', '琼海市', '三亚市', '文昌市', '五指山', '万宁']
            }, {
                name: '河北',
                cities: ['保定市', '沧州市', '承德市', '邯郸市', '衡水市', '廊坊市', '秦皇岛市', '石家庄市', '唐山市', '邢台市', '张家口市']
            }, {
                name: '河南',
                cities: ['安阳市', '鹤壁市', '焦作市', '开封市', '漯河市', '洛阳市', '南阳市', '平顶山市', '濮阳市', '三门峡市', '商丘市', '新乡市', '信阳市', '许昌市', '郑州市', '周口市', '驻马店市', '济源市']
            }, {
                name: '黑龙江',
                cities: ['大庆市', '大兴安岭地区', '哈尔滨市', '鹤岗市', '黑河市', '鸡西市', '佳木斯市', '牡丹江市', '七台河市', '齐齐哈尔市', '双鸭山市', '绥化市', '伊春市']
            }, {
                name: '湖北',
                cities: ['鄂州市', '恩施市', '黄冈市', '黄石市', '荆门市', '荆州市', '潜江市', '神农架林区', '十堰市', '随州市', '天门市', '武汉', '仙桃市', '咸宁市', '襄樊市', '孝感市', '宜昌市']
            }, {
                name: '湖南',
                cities: ['常德市', '郴州市', '衡阳市', '怀化市', '娄底市', '邵阳市', '湘潭市', '湘西土家族苗族自治州', '益阳市', '永州市', '岳阳市', '张家界市', '长沙市', '株洲市']
            }, {
                name: '吉林',
                cities: ['白城市', '白山市', '吉林市', '辽源市', '四平市', '松原市', '通化市', '延边朝鲜族自治州', '长春市']
            }, {
                name: '江苏',
                cities: ['常州市', '淮安市', '连云港市', '南京市', '南通市', '苏州市', '泰州市', '无锡市', '宿迁市', '徐州市', '盐城市', '扬州市', '镇江市']
            }, {
                name: '江西',
                cities: ['抚州市', '赣州市', '吉安市', '景德镇市', '九江市', '南昌市', '萍乡市', '上饶市', '新余市', '宜春市', '鹰潭市']
            }, {
                name: '辽宁',
                cities: ['鞍山市', '本溪市', '朝阳市', '大连市', '丹东市', '抚顺市', '阜新市', '葫芦岛市', '锦州市', '辽阳市', '盘锦市', '沈阳市', '铁岭市', '营口市']
            }, {
                name: '内蒙古',
                cities: ['阿拉善盟', '巴彦淖尔市', '包头市', '赤峰市', '鄂尔多斯市', '呼和浩特市', '呼伦贝尔市', '通辽市', '乌海市', '乌兰察布市', '锡林郭勒盟', '兴安盟']
            }, {
                name: '宁夏',
                cities: ['固原市', '石嘴山市', '吴忠市', '银川市', '中卫市']
            }, {
                name: '青海',
                cities: ['海东地区', '海西蒙古族藏族自治州', '西宁市', '玉树藏族自治州', '海南藏族自治州']
            }, {
                name: '山东',
                cities: ['滨州市', '德州市', '东营市', '菏泽市', '济南市', '济宁市', '莱芜市', '聊城市', '临沂市', '青岛市', '日照市', '泰安市', '威海市', '潍坊市', '烟台市', '枣庄市', '淄博市']
            }, {
                name: '山西',
                cities: ['大同市', '晋城市', '晋中市', '临汾市', '吕梁市', '朔州市', '太原市', '忻州市', '阳泉市', '运城市', '长治市']
            }, {
                name: '陕西',
                cities: ['安康市', '宝鸡市', '汉中市', '商洛市', '铜川市', '渭南市', '西安市', '咸阳市', '延安市', '榆林市']
            }, {
                name: '四川',
                cities: ['阿坝藏族羌族自治州', '巴中市', '成都市', '达州市', '德阳市', '甘孜藏族自治州', '广安市', '广元市', '乐山市', '凉山彝族自治州', '泸州市', '眉山市', '绵阳市', '南充市', '内江市', '攀枝花市', '遂宁市', '雅安市', '宜宾市', '资阳市', '自贡市']
            }, {
                name: '西藏',
                cities: ['拉萨市', '林芝地区', '那曲地区', '日喀则地区', '昌都市']
            }, {
                name: '新疆',
                cities: ['阿克苏地区', '阿勒泰市', '巴音郭楞蒙古自治州', '博尔塔拉蒙古自治州', '昌吉回族自治州', '哈密市', '和田市', '喀什市', '克拉玛依市', '石河子市', '塔城市', '吐鲁番市', '乌鲁木齐市', '伊犁市', '克孜勒苏柯尔克孜', '五家渠']
            }, {
                name: '云南',
                cities: ['保山市', '楚雄市', '大理市', '德宏傣族景颇族自治州', '红河哈尼族彝族自治州', '昆明市', '丽江市', '临沧市', '普洱市', '曲靖市', '文山市', '玉溪市', '昭通市', '怒江傈僳族自治州', '迪庆藏族自治州', '西双版纳傣族自治州']
            }, {
                name: '浙江',
                cities: ['杭州市', '湖州市', '嘉兴市', '金华市', '丽水市', '宁波市', '衢州市', '绍兴市', '台州市', '温州市', '舟山市']
            }, {
                name: '香港',
                cities: ['香港']
            }, {
                name: '澳门',
                cities: ['澳门']
            }, {
                name: '台湾',
                cities: ['台北市', '基隆市', '高雄市', '台中', '台南', '新北市', '新竹市', '嘉义市']
            }
        ]
    }]).directive('lmbCitySelector', ['$document', 'Regions', function ($document, Regions) {
        return {
            restrict: 'A',
            scope: {
                selectList: '='
            },
            replace: true,
            template: '<div class="lmb-city-selector">' +
            '<ul class="region-list">' +
            '<li ng-repeat="region in regions"><button type="button" ng-click="onExpand(this)" ng-class="{active:expand}">{{region.name}}</button>' +
            '<div class="city-check-box" ng-if="region.cities.length" ng-show="expand">' +
            '<div class="check-all" ng-show="region.cities.length>1"><label><input type="checkbox" ng-model="checked" ng-click="onCheckAll(this)"/>全选</label></div>' +
            '<ul class="city-list">' +
            //'<li city-item></li>' +
            '<li ng-repeat="city in region.cities"><label><input type="checkbox" ng-model="checked" ng-init="cityItemInit(this,region.name)" ng-checked="checked" ng-click="onCheckCity(this,region.name)"/>{{city}}</label></li>' +
            '</ul>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '<ul class="select-list"><li class="select-list" ng-repeat="selectRegion in selectList"><strong>{{selectRegion.name}}:</strong><span ng-repeat="selectCity in selectRegion.cities">{{selectCity}}  </span></li></ul>' +
            '</div>',
            link: function (scope, elem, attr) {
                scope.regions = Regions;

                scope.onExpand = function (_scope) {
                    _scope.expand = true;
                    var prev = _scope.$$prevSibling;
                    while (prev) {
                        prev.expand = false;
                        prev = prev.$$prevSibling;
                    }
                    var next = _scope.$$nextSibling;
                    while (next) {
                        next.expand = false;
                        next = next.$$nextSibling;
                    }
                }

                scope.onCheckAll = function (_scope) {
                    var startScope = _scope.$$childHead;

                    while (startScope) {
                        startScope.checked = _scope.checked;
                        scope.onCheckCity(startScope, _scope.region.name);
                        startScope = startScope.$$nextSibling;
                    }
                }

                scope.onCheckCity = function (_scope, regionName) {
                    var region = _getSelectRegion(regionName);
                    if (_scope.checked) {
                        if (region) {
                            region.cities.indexOf(_scope.city) === -1 && region.cities.push(_scope.city);
                        } else {
                            scope.selectList.push({
                                name: regionName,
                                cities: [_scope.city]
                            });
                        }
                    } else {
                        if (region && region.cities.indexOf(_scope.city) > -1) {
                            region.cities.splice(region.cities.indexOf(_scope.city), 1);
                            if (!region.cities.length) {
                                scope.selectList.splice(scope.selectList.indexOf(region), 1);
                            }
                        }
                    }
                }

                scope.cityItemInit=function(_scope,regionName){
                    var region = _getSelectRegion(regionName);
                    if(region && region.cities.indexOf(_scope.city)>-1){
                        _scope.checked=true;
                    }
                }

                function _getSelectRegion(regionName) {
                    var region;
                    for (var i = 0; i < scope.selectList.length; i++) {
                        if (scope.selectList[i].name === regionName) {
                            region = scope.selectList[i];
                            break;
                        }
                    }
                    return region;
                }

                function _isChildOf(child, parent) {
                    var parentNode;
                    if (child && parent) {
                        parentNode = child.parentNode;
                        while (parentNode) {
                            if (parent === parentNode) {
                                return true;
                            }
                            parentNode = parentNode.parentNode;
                        }
                    }
                    return false;
                }

                $document.on('click', function (event) {
                    if (event.target !== elem && !_isChildOf(event.target, elem[0])) {
                        scope.$apply(function () {
                            var startScope = scope.$$childHead;

                            while (startScope) {
                                startScope.expand = false;
                                startScope = startScope.$$nextSibling;
                            }
                        });
                    } else {
                        event.stopPropagation();
                    }
                });
            }
        }
    }]);
