import { useState } from 'react';
import { Burger } from '@mantine/core';

function Burger() {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close sidebar' : 'Open sidebar';

    return (
        <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        />
    );
}

export default Burger;