module.exports = [
    { label: "默认", id: -1, children: null, value: -1 },
    {
        label: "电信",
        children: [
            {
                label: "华东电信",
                children: [
                    { label: "安徽电信", id: 51, children: null, value: 51 },
                    { label: "福建电信", id: 52, children: null, value: 52 },
                    { label: "江苏电信", id: 53, children: null, value: 53 }
                ],
                id: 11,
                value: 11,
                // disabled: true
            },
            {
                label: "华南电信",
                children: [
                    { label: "广东电信", id: 58, children: null, value: 58 },
                    { label: "广西电信", id: 59, children: null, value: 59 },
                ],
                id: 12,
                value: 12,
                // disabled: true
            },
        ],
        id: 1,
        value: 1
    },
    {
        label: "联通",
        children: [
            {
                label: "华东联通",
                children: [
                    { label: "安徽联通", id: 91, children: null, value: 91 },
                    { label: "福建联通", id: 92, children: null, value: 92 },
                    { label: "江苏联通", id: 93, children: null, value: 93 }
                ],
                id: 21,
                value: 21,
                disabled: true
            },
            {
                label: "华南联通",
                children: [
                    { label: "广东联通", id: 98, children: null, value: 98 },
                    { label: "广西联通", id: 99, children: null, value: 99 },
                    { label: "海南联通", id: 100, children: null, value: 100 }
                ],
                id: 22,
                value: 22,
                disabled: true
            }
        ],
        id: 2,
        value: 2,
        disabled: true
    },
    {
        label: "移动",
        children: [
            {
                label: "华东移动",
                children: [
                    { label: "安徽移动", id: 131, children: null, value: 131 },
                ],
                id: 31,
                value: 31,
                disabled: true
            },
            {
                label: "华南移动",
                children: [
                    { label: "广东移动", id: 138, children: null, value: 138 },
                    { label: "广西移动", id: 139, children: null, value: 139 },
                    { label: "海南移动", id: 140, children: null, value: 140 }
                ],
                id: 32,
                value: 32,
                disabled: true
            },
        ],
        id: 3,
        value: 3,
        disabled: true
    },
    { label: "教育网", id: 6, children: null, value: 6 },
    { label: "电信通", id: 7, children: null, value: 7 }
];
