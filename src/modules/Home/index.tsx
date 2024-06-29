import { Column, Line } from '@ant-design/charts';
import { faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Row } from 'antd';
import { useState } from 'react';

export default function Home() {
    const [selectedChart, setSelectedChart] = useState<'column' | 'line'>('column'); // Estado para armazenar o tipo de gráfico selecionado

    const data1 = [
        { type: '1-3秒', value: 0.16 },
        { type: '4-10秒', value: 0.125 },
        { type: '11-30秒', value: 0.24 },
        { type: '31-60秒', value: 0.19 },
        { type: '1-3分', value: 0.22 },
        { type: '3-10分', value: 0.05 },
        { type: '10-30分', value: 0.01 },
        { type: '30+分', value: 0.015 },
    ];


    const handleChartChange = (chartType: 'column' | 'line') => {
        setSelectedChart(chartType);
    };

    return (
        <div className="site-card-wrapper">
            <div style={{ marginBottom: 16 }}>
                <Button
                    type={selectedChart === 'column' ? 'primary' : 'default'}
                    icon={<FontAwesomeIcon icon={faChartBar} />}
                    onClick={() => handleChartChange('column')}
                    style={{ marginRight: 8 }}
                />
                <Button
                    type={selectedChart === 'line' ? 'primary' : 'default'}
                    icon={<FontAwesomeIcon icon={faChartLine} />}
                    onClick={() => handleChartChange('line')}
                />


            </div>
            <Row gutter={16}>
                <Col span={24}>
                    <Card title={`Gráfico ${selectedChart === 'column' ? 'de Colunas' : 'de Linhas'}`} style={{ width: '100%' }}>
                        {selectedChart === 'column' && <Column data={data1} xField="type" yField="value" />}
                        {selectedChart === 'line' && <Line data={data1} xField="type" yField="value" />}
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
