import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
    const theme = useTheme();
    const { data } = useGetGeographyQuery();

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="GEOGRAPHY" subtitle="Kullanıcıların konumunun nerede olduğunu görebilirsiniz." />
            <Box
                mt="40px"
                height="75vh"
                border={`1px solid ${theme.palette.secondary[200]}`}
                borderRadius="4px"
            >
                {data ? (
                    <ResponsiveChoropleth
                        data={data}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.primary[100],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.primary[100],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.primary[100],
                                        strokeWidth: 0.9,
                                    },
                                    text: {
                                        fill: theme.palette.primary[100],
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.primary[100],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: theme.palette.primary.main,
                                },
                            },
                        }}
                        features={geoData.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                        domain={[0, 100]}
                        unknownColor="#666"
                        label="properties.name"
                        valueFormat=".1s"
                        projectionScale={150}
                        projectionTranslation={[0.5, 0.5]}
                        projectionRotation={[0, 0, 0]}
                        borderWidth={1}
                        borderColor="#cccccc"
                        legends={[
                            {
                                anchor: "bottom-left",
                                direction: "column",
                                justify: true,
                                translateX: 100,
                                translateY: -180,
                                itemsSpacing: 5,
                                itemWidth: 125,
                                itemHeight: 25,
                                itemDirection: "left-to-right",
                                itemTextColor: theme.palette.primary[100],
                                itemOpacity: 1,
                                symbolSize: 25,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: theme.palette.background.alt,
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                ) : (
                    <>Loading...</>
                )}
            </Box>
        </Box>
    );
};

export default Geography;