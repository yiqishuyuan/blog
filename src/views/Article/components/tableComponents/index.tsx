import React, { useState } from 'react';
import type {
  DatePickerProps,
  TimePickerProps,
  RadioChangeEvent,
  MenuProps,
  PaginationProps,
} from 'antd';
import { DatePicker, Select, Space, TimePicker, Radio, Dropdown, Pagination } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '重要', value: '重要', className: 'label-1' },
  { label: '一般', value: '一般', className: 'label-2' },
  { label: '废弃', value: '废弃', className: 'label-3' },
];

const items: MenuProps['items'] = [
  {
    label: '默认',
    key: '1',
  },
  {
    label: '已完成',
    key: '2',
  },
  {
    label: '未完成',
    key: '3',
  },
];
// 分页
const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
const TableComponents: React.FC = () => {
  const [value4, setValue4] = useState('Apple');
  const [type, setType] = useState<PickerType>('time');
  const [state, setState] = useState<string | number>('默认');
  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
    const numKey = typeof key === 'string' ? parseInt(key, 10) : key;

    if (typeof numKey === 'number' && !isNaN(numKey) && numKey > 0 && numKey <= items.length) {
      // @ts-expect-error 此处需要更改
      setState(items[numKey - 1].label) ;
    } else {
      setState('default');
    }
    // setState(key >= 0 ? items[key - 1].label : 'default');
  };

  return (
    <Space style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
      筛选：
      <Select aria-label="Picker Type" value={type} onChange={setType}>
        <Option value="default" key={1}>
          默认
        </Option>
        <Option value="time">小时</Option>
        <Option value="date">日</Option>
        <Option value="week">周</Option>
        <Option value="month">月</Option>
        <Option value="quarter">年</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
      <div className="criticality-cicrle" style={{ marginLeft: '20px' }}>
        程度：
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChange4}
          value={value4}
          optionType="default"
          buttonStyle="solid"
        />
      </div>
      <div className="complete-state" style={{ marginLeft: '20px' }}>
        任务状态：
        <Dropdown menu={{ items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {state}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="pagination-number" style={{ marginLeft: '20px', alignItems: 'end' }}>
        <Pagination
          showTotal={(total) => `共 ${total} 数据：`}
          showQuickJumper
          defaultCurrent={1}
          total={50}
          onChange={onChange}
          size="small"
          hideOnSinglePage={true}
          pageSize={9}
        />
      </div>
    </Space>
  );
};

export default TableComponents;
