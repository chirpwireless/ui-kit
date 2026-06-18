import { Box, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { CallIcon } from '@chirp/ui/assets/fleet-icons';
import { EyeIcon } from '@chirp/ui/icons';

import { Table } from './Table';
import { TableVirtualized } from './TableVirtualized';
import { TableColumnDef } from './types';

type Person = {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    occupation: string;
    someKey: string;
};

const data: Person[] = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        age: 25,
        occupation: 'Software Engineer',
        someKey: 'lorem lorem lorem',
    },
    { id: 2, first_name: 'Jane', last_name: 'Doe', age: 30, occupation: 'Doctor', someKey: 'lorem lorem' },
    { id: 3, first_name: 'Bob', last_name: 'Smith', age: 35, occupation: 'Lawyer', someKey: 'lorem lorem lorem' },
    { id: 4, first_name: 'Alice', last_name: 'Johnson', age: 20, occupation: 'Student', someKey: 'lorem lorem' },
    { id: 5, first_name: 'Mike', last_name: 'Brown', age: 40, occupation: 'Teacher', someKey: 'lorem lorem lorem' },
    { id: 6, first_name: 'Emily', last_name: 'Davis', age: 28, occupation: 'Nurse', someKey: 'lorem lorem' },
    { id: 7, first_name: 'David', last_name: 'Wilson', age: 32, occupation: 'Engineer', someKey: 'lorem lorem' },
];

const columns: TableColumnDef<Person>[] = [
    { header: 'Full name', accessorFn: ({ first_name, last_name }) => `${first_name} ${last_name}` },
    {
        header: 'First name',
        accessorKey: 'first_name',
        cell: (props) => (
            <Stack direction="row" alignItems="center" gap={1}>
                <EyeIcon />
                <Box fontWeight="bold">{props.getValue<string>()}</Box>
            </Stack>
        ),
    },
    { header: 'Age', accessorKey: 'age' },
    { header: 'Occupation', accessorKey: 'occupation' },
    { header: 'Some key', accessorKey: 'someKey' },
    { id: 'actions', header: '', accessorKey: 'age', enableSorting: false, cell: () => <CallIcon /> },
];

const meta: Meta<typeof Table<Person>> = {
    title: 'UI/Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table<Person>>;

export const Default: Story = {
    render: () => (
        <Box height="300px" width="800px">
            <Table enableSorting data={data} columns={columns} onRowClick={(row) => alert(row.id)} />
        </Box>
    ),
};

export const Virtualized: Story = {
    render: () => (
        <Box height="400px" width="800px">
            <TableVirtualized
                hasNextPage={false}
                estimateSize={56}
                data={data}
                columns={columns}
                onRowClick={(row) => alert(row.id)}
            />
        </Box>
    ),
};
