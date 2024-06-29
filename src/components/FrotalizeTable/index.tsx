import { Card, Input, Table } from "antd";
import { useState } from "react";

// Definindo tipos para os parâmetros
type ColumnType = {
    title: string;
    dataIndex: string;
    key: string;
};

type DataType = {
    key: string;
    [key: string]: any; // Permitir qualquer campo adicional além de key
};

interface Props {
    columns: ColumnType[];
    dataSource: DataType[];
    tableTitle?: string; // Título opcional para a tabela
}

const FrotalizeTable: React.FC<Props> = ({ columns, dataSource, tableTitle }) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    const filteredDataSource = dataSource.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                {tableTitle ? <h3 className="text-lg font-semibold mb-4">{tableTitle}</h3> : <div></div>}
                <Input.Search
                    placeholder="Search..."
                    allowClear
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-1/4"
                />
            </div>
            <Table
                showHeader
                dataSource={filteredDataSource}
                columns={columns}
            />
        </Card>
    );
}

export default FrotalizeTable;
