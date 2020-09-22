import { TranslationMessages } from 'ra-core';

const zhCnMessages: TranslationMessages = {

    "Expectation Failed": "请求失败",
    "Failed to fetch": "服务器连接失败",
    "username_already_exist": "用户名已存在",
    "mobile_already_exist": "手机号已存在",
    "email_already_exist": "邮箱已经存在",
    "UserAgency_Already_Exist": "用户推荐关系已经存在",
    "Not Found": "接口尚未开发",
    ra: {
        action: {
            add_filter: '添加筛选',
            add: '新增',
            back: '返回',
            bulk_actions: '%{smart_count} 项被选中',
            cancel: '取消',
            clear_input_value: 'Clear value',
            clone: 'Clone',
            confirm: 'Confirm',
            create: '新建',
            delete: '删除',
            edit: '编辑',
            export: '导出CSV',
            list: 'List',
            refresh: '刷新',
            remove_filter: 'Remove this filter',
            remove: 'Remove',
            save: '保存',
            search: '搜索',
            show: 'Show',
            sort: 'Sort',
            undo: '取消',
            unselect: 'Unselect',
            expand: 'Expand',
            close: 'Close',
            open_menu: '打开导航',
            close_menu: '关闭导航',
        },
        boolean: {
            true: 'Yes',
            false: 'No',
            null: '',
        },
        page: {
            create: '创建新 %{name}',
            dashboard: '面板',
            edit: '%{name} #%{id}',
            error: 'Something went wrong',
            list: '%{name}',
            loading: 'Loading',
            not_found: '没有找到记录',
            show: '%{name} #%{id}',
            empty: '还没有%{name}',
            invite: '是否添加?',
        },
        input: {
            file: {
                upload_several: 'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several: 'Drop some pictures to upload, or click to select one.',
                upload_single: 'Drop a picture to upload, or click to select it.',
            },
            references: {
                all_missing: 'Unable to find references data.',
                many_missing: 'At least one of the associated references no longer appears to be available.',
                single_missing: 'Associated reference no longer appears to be available.',
            },
            password: {
                toggle_visible: 'Hide password',
                toggle_hidden: 'Show password',
            },
        },
        message: {
            about: 'About',
            are_you_sure: 'Are you sure?',
            bulk_delete_content: 'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
            bulk_delete_title: 'Delete %{name} |||| Delete %{smart_count} %{name}',
            delete_content: 'Are you sure you want to delete this item?',
            delete_title: 'Delete %{name} #%{id}',
            details: 'Details',
            error: "A client error occurred and your request couldn't be completed.",
            invalid_form: 'The form is not valid. Please check for errors',
            loading: 'The page is loading, just a moment please',
            no: 'No',
            not_found: '请检查您的地址是否输入正确',
            yes: 'Yes',
            unsaved_changes: "Some of your changes weren't saved. Are you sure you want to ignore them?",
        },
        navigation: {
            no_results: '暂无记录',
            no_more_results: 'The page number %{page} is out of boundaries. Try the previous page.',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: '每页:',
            next: '下一页',
            prev: '上一页',
        },
        sort: {
            sort_by: 'Sort by %{field} %{order}',
            ASC: 'ascending',
            DESC: 'descending',
        },
        auth: {
            auth_check_error: '请先登录',
            user_menu: '个人菜单',
            username: '用户名',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '认证失败，请稍后重试',
            logout: '登出',
        },
        notification: {
            updated: '记录正在更新 |||| %{smart_count} 项已更新',
            created: '新建成功',
            deleted: '记录正在删除 |||| %{smart_count} 项已删除',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Element does not exist',
            http_error: 'Server communication error',
            data_provider_error: 'dataProvider error. Check the console for details.',
            i18n_error: 'Cannot load the translations for the specified language',
            canceled: '操作已经取消',
            logged_out: 'Your session has ended, please reconnect.',
        },
        validation: {
            required: '必填项',
            minLength: 'Must be %{min} characters at least',
            maxLength: 'Must be %{max} characters or less',
            minValue: 'Must be at least %{min}',
            maxValue: 'Must be %{max} or less',
            number: 'Must be a number',
            email: 'Must be a valid email',
            oneOf: 'Must be one of: %{options}',
            regex: 'Must match a specific format (regexp): %{pattern}',
        },
    },
    pos: {
        search: '搜索',
        configuration: '设置',
        language: '语言',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            month_history: '30 Day Revenue History',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to the react-admin e-commerce demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                aor_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            buildings: '房源楼盘',
            agencyTeams: '团队奖',
            orders: '订单',
            moneyMenu: "财务管理",
            permissionMenu: "权限管理",
            firmMenu: "企业管理"
        },
    },
    resources: {
        customers: {
            name: 'Customer |||| Customers',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
            },
            filters: {
                last_visited: 'Last visited',
                today: 'Today',
                this_week: 'This week',
                last_week: 'Last week',
                this_month: 'This month',
                last_month: 'Last month',
                earlier: 'Earlier',
                has_ordered: 'Has ordered',
                has_newsletter: 'Has newsletter',
                group: 'Segment',
            },
            fieldGroups: {
                identity: 'Identity',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        commands: {
            name: 'Order |||| Orders',
            amount: '1 order |||| %{smart_count} orders',
            title: 'Order %{reference}',
            fields: {
                basket: {
                    delivery: 'Delivery',
                    reference: 'Reference',
                    quantity: 'Quantity',
                    sum: 'Sum',
                    tax_rate: 'Tax Rate',
                    total: 'Total',
                    unit_price: 'Unit Price',
                },
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                status: 'Status',
                returned: 'Returned',
            },
        },
        invoices: {
            name: 'Invoice |||| Invoices',
            fields: {
                date: 'Invoice date',
                customer_id: 'Customer',
                command_id: 'Order',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        products: {
            name: 'Poster |||| Posters',
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                sales: 'Sales',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
            filters: {
                categories: 'Categories',
                stock: 'Stock',
                no_stock: 'Out of stock',
                low_stock: '1 - 9 items',
                average_stock: '10 - 49 items',
                enough_stock: '50 items & more',
                sales: 'Sales',
                best_sellers: 'Best sellers',
                average_sellers: 'Average',
                low_sellers: 'Low',
                never_sold: 'Never sold',
            },
        },
        categories: {
            name: 'Category |||| Categories',
            fields: {
                products: 'Products',
            },
        },
        users: {
            name: '用户',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                username: "用户名",
                mobile: "手机号",
                idCardNumber: "身份证",
                email: '邮箱',
                is_registerd: "是否注册",
                is_pass_set: "是否设置密码"

            },

        },
        roles: {
            name: '角色',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "角色名",
            },
        },
        user_income_bills: {
            name: '用户收入',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "角色名",
            },
        },
        firms: {
            name: '企业',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                firm_category_id: "分类",
                name: "企业名",
            },
        },
        firm_categories: {
            name: '企业分类',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "分类名",
            },
        },
        permissions: {
            name: '权限',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "权限名",
            },
        },
        user_agencies: {
            name: '推荐关系',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                user_id: "用户",
                parent_user_id: "推荐人",
                leader_ids: "所在团队"
            },
        },
        agency_teams: {
            name: '团队奖',
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                leader_id: "队长",
                member_count: "成员人数",
                team_performance: "业绩",
                team_prize_qualification: "团队奖资格",
                team_prize_level: "团队奖等级",
                total_team_prize: "累计奖金"

            },
        },
        house_orders: {
            name: "订单",
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                price: "成交价格",
                user_id: "客户",
                agency_id: "所属经纪人",
                achievement_type: "分成类别",
                performance: "分成金额",
                achievenment_ratio: "分成比例",
                building_id: "楼盘"
            }
        },
        house_units: {
            name: "房号",
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                location: "朝向",
                building_id: "所属楼盘",
                description: "描述",
                house_unit_type_id: "户型",
                house_unit_type: "户型",
                unit_number: "户号",
                "HouseUnitType.building_id": "所属开发商"
            }
        },
        house_unit_types: {
            name: "户型",
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "户型名",
                building_id: "所属楼盘",
                storage: "库存"
            }
        },
        buildings: {
            name: "楼盘",
            fields: {
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                name: "楼盘名称",
                description: "楼盘描述",
                firm_id: "开发商",
                performance: "分佣"
            }
        },
        user_achievements: {
            name: '个人业绩',
            fields: {
                
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                performance: "业绩金额(元)",
                user_id: "所属用户",
                is_appointed: "佣金是否分配"

            },
        },
        user_balances: {
            name: '用户账户',
            fields: {
                
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                performance: "业绩金额(元)",
                user_id: "所属用户",
                is_appointed: "佣金是否分配"

            },
        },
        team_achievements: {
            name: '团队业绩',
            fields: {
                
                id: '编号',
                created_at: "创建于",
                updated_at: "更新于",
                performance: "业绩金额(元)",
                user_id: "所属用户",
                is_appointed: "佣金是否分配"

            },
        },
        reviews: {
            name: 'Review |||| Reviews',
            amount: '1 review |||| %{smart_count} reviews',
            relative_to_poster: 'Review on poster',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: 'Segment |||| Segments',
            fields: {
                customers: 'Customers',
                name: 'Name',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};

export default zhCnMessages;