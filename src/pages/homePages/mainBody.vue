<template>
    <div class="all_">
        <div class="header_"></div>
        <div class="body_">
            <div class="leftContent">
                <child-weather-temp></child-weather-temp>
                <child-border style="height: 35%" src="1.png">
                    <child-l-t-temp></child-l-t-temp>
                </child-border>
                <child-border style="height: 35%" src="2.png">
                    <child-l-c-temp></child-l-c-temp>
                </child-border>
                <child-border style="height: 30%" src="3.png">
                    <child-l-b-temp></child-l-b-temp>
                </child-border>
            </div>
            <div class="centerContent">
                <div style="width: 100%;height: 70%">
                    <child-broadcast-temp></child-broadcast-temp>
                    <child-c-t-temp></child-c-t-temp>
                </div>
                <div style="width: 100%;height: 30%">
                    <child-c-b-temp></child-c-b-temp>
                </div>
            </div>
            <div class="rightContent">
                <child-theme-temp></child-theme-temp>
                <child-border style="height: 35%" src="4.png">
                    <child-r-t-temp></child-r-t-temp>
                </child-border>
                <child-border style="height: 35%" src="5.png">
                    <child-r-c-temp></child-r-c-temp>
                </child-border>
                <child-border style="height: 30%" src="6.png">
                    <child-r-b-temp></child-r-b-temp>
                </child-border>
            </div>
        </div>
    </div>
</template>

<script>
    import ChildLTTemp from "./children/childLTTemp";
    import ChildLCTemp from "./children/childLCTemp";
    import ChildLBTemp from "./children/childLBTemp";
    import EChartsTest from "../../components/EChartsTest";
    import ChildRTTemp from "./children/childRTTemp";
    import ChildRCTemp from "./children/childRCTemp";
    import ChildRBTemp from "./children/childRBTemp";
    import ChildCBTemp from "./children/childCBTemp";
    import ChildBorder from "./common/childBorder";
    import ChildCTTemp from "./children/childCTTemp";
    import ChildBroadcastTemp from "./children/childBroadcastTemp";
    import ChildThemeTemp from "./children/childThemeTemp";
    import ChildWeatherTemp from "./children/childWeatherTemp";

    export default {
        name: "mainBody",
        components: {
            ChildWeatherTemp,
            ChildThemeTemp,
            ChildBroadcastTemp,
            ChildCTTemp,
            ChildBorder,
            ChildCBTemp,
            ChildRBTemp,
            ChildRCTemp,
            ChildRTTemp,
            EChartsTest,
            ChildLBTemp,
            ChildLCTemp,
            ChildLTTemp
        }
    };
</script>

<style scoped lang="less">
    .all_ {
        width: 100%;
        height: 100%;
        background-image: url("../../assets/nh_img/background.jpg");
        background-size: 100% 100%;

        .header_ {
            height: 10%;
            width: 100%;
            background-image: url("../../assets/nh_img/title.png");
            background-repeat: no-repeat;
            background-size: 90% 90px;
            background-position: center;
        }

        .body_ {
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;

            .leftContent {
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }

            .centerContent {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }

            .rightContent {
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }
        }
    }
</style>
