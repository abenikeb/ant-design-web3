import { ConnectModal } from '@ant-design/web3';
import { Button, Space } from 'antd';
import React from 'react';
import type { DefaultGuide, Wallet } from '../interface';

const walletList: Wallet[] = [
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
    name: '测试钱包',
    remark: '备注',
    app: {
      link: 'https://test.com/xxx',
    },
    extensions: [
      {
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
        browserName: 'Chrome',
        description: 'Access your wallet right from your favorite web browser.',
      },
      {
        key: 'Firefox',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
        browserName: 'Firefox',
        description: 'Access your wallet right from your favorite web browser.',
      },
    ],
    group: 'Popular',
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
    name: '测试钱包2',
    remark: '备注2',
    app: {
      link: 'https://test.com/xxx',
    },
    extensions: [
      {
        key: 'Firefox',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
        browserName: 'Firefox',
        description: 'Access your wallet right from your favorite web browser.',
      },
    ],
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: '测试钱包3',
    remark: '备注3',
    group: 'Popular',
    app: {
      link: 'https://test.com/xxx',
    },
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    name: '测试钱包4',
    remark: '备注4',
    extensions: [
      {
        key: 'Safari',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/9d56eba7-84d7-4360-b013-bf57d419b058',
        browserName: 'Safari',
        description: 'Access your wallet right from your favorite web browser.',
      },
    ],
  },
  {
    name: '测试钱包5',
    remark: '备注5',
    app: {
      link: 'https://test.com/xxx',
    },
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    name: '测试钱包6',
    remark: '备注6',
    key: 6,
    app: {
      link: 'https://test.com/xxx',
    },
    extensions: [
      {
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
        browserName: 'Chrome',
        description: 'Access your wallet right from your favorite web browser.',
      },
    ],
  },
  {
    name: '测试钱包6',
    remark: '备注6',
    key: 7,
    app: {
      link: 'https://test.com/xxx',
    },
    extensions: [
      {
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
        browserName: 'Chrome',
        description: 'Access your wallet right from your favorite web browser.',
      },
    ],
  },
];
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};
const guide: DefaultGuide = {
  title: 'What is a Wallet?',
  infos: [
    {
      title: 'A Home for your Digital Assets',
      description:
        'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    },
    {
      title: 'A New Way to Log In',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In2',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In3',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
  ],
  moreLink: 'https://test.com/xxx',
};

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <Space>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <Button type="primary" onClick={() => setOpen2(true)}>
        Open with simple
      </Button>
      <ConnectModal
        open={open}
        theme="dark"
        title="Connect Wallet"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
        onOpenChange={setOpen}
        guide={guide}
      />
      <ConnectModal
        open={open2}
        theme="dark"
        title="Connect Wallet"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
        onOpenChange={setOpen2}
      />
    </Space>
  );
};

export default App;
