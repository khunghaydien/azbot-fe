'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

// Import ApexCharts dynamically để tránh lỗi SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ReportChart() {
    const t = useTranslations();

    const chartOptions = {
        chart: {
            type: 'bar' as const,
            toolbar: {
                show: false
            },
            fontFamily: 'inherit'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: number) {
                return val.toLocaleString();
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ['#304758']
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: [
                t('report.month.apr') || 'Tháng 4',
                t('report.month.may') || 'Tháng 5',
                t('report.month.jun') || 'Tháng 6'
            ],
            labels: {
                style: {
                    colors: '#000000',
                    fontSize: '16px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#000000',
                    fontSize: '16px'
                },
                formatter: function (val: number) {
                    return val.toLocaleString();
                }
            }
        },
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100]
            },
            colors: ['#FD684F', '#7C6DFF']
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return val.toLocaleString();
                }
            }
        },
        legend: {
            position: 'top' as const,
            horizontalAlign: 'right' as const,
            labels: {
                colors: '#6B7280',
                fontSize: '12px',
                borderRadius: '12px',
            }
        },
        grid: {
            borderColor: '#E5E7EB',
            strokeDashArray: 3
        }
    };

    const series = [
        {
            name: t('report.metrics.customers') || 'Số khách hàng',
            data: [32918, 34373, 54427]
        },
        {
            name: t('report.metrics.orders') || 'Số đơn hàng',
            data: [16467, 17193, 28203]
        }
    ];

    return (
        <div className="w-full">
            <div className="m-6">
                <h3 className="text-[20px] font-semibold text-[#FC3C1C]">
                    {t('report.chart.title') || 'Báo cáo hiệu suất'}
                </h3>
            </div>

            <div className="bg-transparent p-6">
                <Chart
                    options={chartOptions}
                    series={series}
                    type="bar" as const
                    height={400}
                />
            </div>
        </div>
    );
}
