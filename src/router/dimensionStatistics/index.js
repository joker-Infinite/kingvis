export default [
    {
        path: "serviceAreaDimension",
        name: "serviceAreaDimension",
        component: () =>
            import( "@/pages/serviceAreaDimension/serviceAreaDimension.vue")
    },
    {
        path: "financeDimension",
        name: "financeDimension",
        component: () =>
            import( "@/pages/financeDimension/financeDimension.vue")
    },
]