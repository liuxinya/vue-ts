module.exports = [
    {
        "title": "首页",
        "icon": "fa-laptop",
        "router": "main",
        "component": "MainComponent"
    },
    {
        "title": "文档专区",
        "icon": "fa-file",
        "router": "file-center",
        "component": "UnionFileCenterComponent"
    },
    {
        "title": "下载中心",
        "icon": "fa-download",
        "router": "download-center",
        "children": [
            {
                "title": "全部文件",
                "router": "all",
                "icon": "fa-diamond",
                "component": "UnionDownloadCenterOfAllDownloadComponent"
            }
        ]
    },
    {
        "title": "用户管理",
        "icon": "fa-mortar-board",
        "router": "user-manage",
        "children": [
            {
                "title": "机构成员",
                "icon": "fa-user",
                "router": "users",
                "component": "UsersComponent"
            },
            {
                "title": "成员管理",
                "icon": "fa-cog",
                "router": "users-mange",
                "component": "UsersManageComponent"
            },
            {
                "title": "群管理",
                "router": "group-manage",
                "children": [
                    {
                        "title": "我的群",
                        "icon": "fa-users",
                        "router": "groups",
                        "component": "GroupsComponent"
                    },
                    {
                        "title": "新建群",
                        "icon": "fa-plus",
                        "router": "new-group",
                        "component": "NewGroupComponent"
                    }
                ]
            }
        ]
    },
    {
        "title": "数据管理",
        "icon": "fa-cube",
        "router": "data-manage",
        "children": [
            {
                "title": "数据库管理",
                "icon": "fa-database",
                "router": "inst-database-manage",
                "component": "UnionInstDatabaseManageComponent"
            },
            {
                "title": "表查询",
                "icon": "fa-table",
                "router": "table-query",
                "component": "TableQueryComponent"
            },
            {
                "title": "表编辑",
                "icon": "fa-plus",
                "router": "table-create",
                "component": "TableCreateComponent"
            }
        ]
    },
    {
        "title": "数据处理",
        "icon": "fa-inbox",
        "router": "data-exec",
        "children": [
            {
                "title": "我的项目",
                "icon": "fa-paw",
                "router": "project-mine",
                "component": "UnionProjectMineComponent"
            },
            {
                "title": "我的任务流",
                "icon": "fa-paw",
                "router": "my-task-flow",
                "component": "MyTaskFlowComponent"
            },
            {
                "title": "项目管理",
                "icon": "fa-paw",
                "hidden": true,
                "router": "project-manage",
                "component": "UnionTaskManageComponent"
            },
            {
                "title": "新建项目",
                "icon": "fa-plus",
                "hidden": true,
                "router": "project-new",
                "component": "UnionProjectNewComponent"
            }
        ]
    },
    {
        "title": "系统管理",
        "icon": "fa-superpowers",
        "router": "system-manage",
        "children": [
            {
                "title": "审计日志",
                "icon": "fa-wpexplorer",
                "router": "check-log",
                "component": "CheckLogComponent"
            },
            {
                "title": "参数管理",
                "icon": "fa-magic",
                "router": "param-manage",
                "component": "ParamManageComponent"
            },
            {
                "title": "资源管理",
                "router": "resource-manage",
                "icon": "fa-hdd-o",
                "children": [
                    {
                        "title": "资源列表",
                        "router": "resouce-list",
                        "icon": "fa-sliders",
                        "component": "UnionResourcesComponent"
                    }
                ]
            },
            {
                "title": "API管理",
                "router": "api-manage",
                "icon": "fa-linode",
                "children": [
                    {
                        "title": "API接口列表",
                        "icon": "fa-code",
                        "router": "api-manage",
                        "component": "ApiManageComponent"
                    },
                    {
                        "title": "申请API接口",
                        "icon": "fa-plus",
                        "router": "api-apply",
                        "component": "ApiApplyComponent"
                    }
                ]
            },
            {
                "title": "敏感字段管理",
                "icon": "fa-leaf",
                "router": "sensitive-manage",
                "children": [
                    {
                        "title": "申请列表",
                        "router": "apply-list",
                        "icon": "fa-align-justify",
                        "component": "SensitiveManageComponent"
                    },
                    {
                        "title": "我的申请",
                        "router": "my-apply",
                        "icon": "fa-list",
                        "component": "MySensitiveManageComponent",
                        "hidden": true
                    },
                    {
                        "title": "新建申请",
                        "router": "new-apply",
                        "icon": "fa-plus",
                        "component": "NewSensitiveManageComponent"
                    }
                ]
            },
            {
                "title": "API调用统计",
                "router": "all-api",
                "icon": "fa-plus",
                "component": "AllApiComponent"
            },
            {
                "title": "违规查询",
                "router": "check-Violation",
                "icon": "fa-plus",
                "component": "CheckViolationComponent"
            }
        ]
    }
];