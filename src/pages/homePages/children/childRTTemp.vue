<template>
	<div style="width: 100%;height: 100%;position: relative;">
		<ul class="btn">
			<li :class="{selected:selected==='ny'}" @click="selectAttributes('ny')">能源</li>
			<li :class="{selected:selected==='sy'}" @click="selectAttributes('sy')">商业</li>
		</ul>
		<internal ref="internal" id="rt"></internal>
	</div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childRTTemp",
        components: {Internal},
        data() {
            return {
                selected: 'ny'
            };
        },
        methods: {
            init() {
                let ny = 'image://' + require('../../../assets/nh_img/ny.png');
                let yt = 'image://' + require('../../../assets/nh_img/yt.png');
                let qy = 'image://' + require('../../../assets/nh_img/qy.png');
                let cy = 'image://' + require('../../../assets/nh_img/cy.png');
                let car = 'image://' + require('../../../assets/nh_img/car.png');
                let nodeDataList = [
                    {
                        name: "#95", // 节点名
                        linkTargetName: "汽油 ", // 连线目标节点
                        linkValue: " ", // 连线介绍
                        coordConfig: {
                            level: "0"
                        },
                        value: [400, 170],
                        draggable: false,
                        fixed: true,
                        symbol: ny,
                        symbolSize: 30,
						targetName:'1111'
                    },
                    {
                        name: "#98",
                        linkTargetName: "汽油 ",
                        linkValue: " ",
                        coordConfig: {
                            level: "0"
                        },
                        value: [400, 90],
                        draggable: false,
                        fixed: true,
                        symbol: ny,
                        symbolSize: 30
                    },
                    {
                        name: "#92",
                        linkTargetName: "汽油 ",
                        linkValue: " ",
                        coordConfig: {
                            level: "0"
                        },
                        value: [400, 250],
                        draggable: false,
                        fixed: true,
                        symbol: ny,
                        symbolSize: 30
                    },
                    {
                        name: "柴油",
                        linkTargetName: "柴油 ",
                        linkValue: " ",
                        coordConfig: {
                            level: "0"
                        },
                        value: [400, 0],
                        draggable: false,
                        symbol: yt,
                        symbolSize: 30
                    },
                    //汽油,C,D ....n
                    {
                        name: "汽油 ",
                        linkTargetName: "车辆",
                        linkValue: " ",
                        coordConfig: {
                            level: "1"
                        },
                        symbol: qy,
                        symbolSize: 40,
                        draggable: false,
                        value: [220, 160]
                    },
                    {
                        name: "柴油 ",
                        linkTargetName: "车辆",
                        linkValue: " ",
                        coordConfig: {
                            level: "1"
                        },
                        symbol: cy,
                        symbolSize: 40,
                        draggable: false,
                        value: [220, 40]
                    },
                    {
                        name: "车辆",
                        linkTargetName: "车辆",
                        linkValue: " ",
                        // coordConfig: {level: 2},
                        symbolSize: 50,
                        symbol: car,
                        draggable: false,
                        value: [10, 100]
                    }
                ];

                let getCoordDataList = function () {
                    let coorDataDict = {};
                    let defaultConfig = {
                        type: "lines", //块1,2...n到节点A,B...N
                        coordinateSystem: "cartesian2d",
                        // animationDelay: 10000,
                        z: 1,
                        effect: {
                            show: false,
                            smooth: true,
                            trailLength: 0,
                            symbol: "pin",
                            color: "#1eb7fb",
                            symbolSize: 10,
                            period: 3,
                            delay: 1500,
                            loop: true
                        },
                        lineStyle: {
                            normal: {
                                curveness: 0,
                                color: "#1eb7fb",
                                width: 1
                            }
                        },
                        data: []
                    };
                    nodeDataList.map(item => {
                        if (item.coordConfig !== undefined) {
                            if (!(item.coordConfig.level in coorDataDict)) {
                                let coorConfig = JSON.parse(JSON.stringify(defaultConfig));
                                if (item.coordConfig.lineStyle !== undefined) {
                                    coorConfig.lineStyle = item.coordConfig.lineStyle;
                                }
                                if (item.coordConfig.effect !== undefined) {
                                    coorConfig.effect = item.coordConfig.effect;
                                }
                                coorDataDict[item.coordConfig.level] = coorConfig;
                            }

                            let coordData = [
                                item.value,
                                nodeDataList.filter(i => i.name === item.linkTargetName)[0].value
                            ];
                            coorDataDict[item.coordConfig.level].data.push({
                                coords: coordData
                            });
                            if (item.coordConfig.bilateral) {
                                coorDataDict[item.coordConfig.level].data.push({
                                    coords: coordData.reverse()
                                });
                            }
                        }
                    });
                    return Object.values(coorDataDict);
                };

                let option = {
                    itemStyle: {
                        normal: {
                            color: "#67C23A"
                        },
                        shadowBlur: 0
                    },
                    textStyle: {
                        color: "#FFF",
                        fontSize: 16,
                        fontWeight: 600
                    },
                    legend: [
                        {
                            formatter: function (name) {
                                return echarts.format.truncateText(name, 200, "12px", "…");
                            },
                            tooltip: {
                                show: true
                            },
                            selectedMode: "false",
                            bottom: 20
                        }
                    ],
                    animationDuration: 500,
                    animationEasingUpdate: "quinticInOut",
                    xAxis: {
                        show: false,
                        type: "value"
                    },
                    yAxis: {
                        show: false,
                        type: "value"
                    },
                    series: [
                        {
                            type: "graph",
                            coordinateSystem: "cartesian2d",
                            legendHoverLink: false,
                            hoverAnimation: false,
                            nodeScaleRatio: false,
                            focusNodeAdjacency: false,
                            edgeSymbol: ["none", "circle"],
                            edgeSymbolSize: [2, 15],
                            edgeLabel: {
                                show: false,
                                normal: {
                                    show: true,
                                    position: "middle",
                                    textStyle: {
                                        fontSize: 12
                                    },
                                    formatter: "{c}"
                                }
                            },
                            roam: false,
                            //圆形上面的文字
                            label: {
                                normal: {
                                    position: "bottom",
                                    show: true,
                                    textStyle: {
                                        fontSize: 12
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "#409eff"
                                },
                                shadowBlur: 0
                            },
                            lineStyle: {
                                normal: {
                                    width: 0,
                                    shadowColor: "none",
                                    color: "#ff0000"
                                }
                            },
                            data: nodeDataList,

                            links: nodeDataList.map(item => {
                                return {
                                    source: item.name,
                                    value: item.linkValue,
                                    target: item.targetName
                                };
                            })
                        }
                    ].concat(getCoordDataList())
                };
                this.$refs["internal"].initECharts(option);
            },
            selectAttributes(v) {
                this.selected = v;
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped lang="less">
	.btn {
		height: 30px;
		width: 180px;
		top: 20px;
		right: 50px;
		position: absolute;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		z-index: 10;

		li {
			width: 80px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			color: #1a73e8;
			font-weight: 700;
			font-size: 16px;
			cursor: pointer;
			transition: linear .2s;
		}

		.selected {
			color: #E5D95E;
			background-image: linear-gradient(to right,
			rgba(42, 161, 232, 0),
			rgba(42, 161, 232, 0.8),
			rgba(42, 161, 232, 0),);
		}
	}
</style>
