/*
 * 路由子模块
 * */
import serviceArea from "./serviceArea/index";
import business from "./business/index";
import energy from "./energy/index";
import media from "./media/index";
import details from "./details/index";
import authorityManagement from './authorityManagement/index'
import systemSettings from './systemSettings/index'

export default {
    serviceArea: serviceArea,
    business: business,
    energy: energy,
    media: media,
    authorityManagement: authorityManagement,
    systemSettings: systemSettings,
    details: details
};
