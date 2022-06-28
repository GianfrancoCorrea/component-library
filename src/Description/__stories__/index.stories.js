import React from 'react';
import Description from '../index';

export default {
    title      : 'Description',
    component         : Description,
        parameters : {
componentSubtitle : 'A Description is a block of text',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
        </Description>
    </div>
);

export const SetLinesLimit = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Description linesToShow={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
        </Description>
        <br />
        <br />
        <Description linesToShow={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
        </Description>
    </div>
);
SetLinesLimit.parameters =  { docs: { description: { story:  'A Description can crop the text in different lines amount.' } } };

export const NotCroppedDescription = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Description dontCrop>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ante odio, efficitur ut iaculis vitae, egestas non erat.
            Nullam semper porta dignissim.
            Cras nunc ligula, maximus et aliquam at, malesuada eget nibh.
            Quisque interdum in ante quis posuere. Cras sit amet nisi nunc.
            Suspendisse tristique tincidunt felis, at pellentesque libero sollicitudin facilisis.
            Donec quis nibh sit amet ipsum rutrum auctor. Nulla pulvinar mi eget fermentum malesuada.
            Fusce nec magna interdum, iaculis mauris sit amet, dapibus justo.
            Aliquam ut mi vulputate, posuere nunc ut, tempus risus.
            Feugiat ac turpis sed viverra. Nullam ut metus a erat blandit mattis et at mi.
            Nam libero felis, gravida nec elit efficitur, placerat dictum ligula.
            Etiam accumsan eu nibh vel interdum. Nunc vel lobortis est.
            Sed malesuada cursus nulla, et euismod sem condimentum ac.
            Nulla dui dolor, feugiat vel aliquam nec, lacinia vitae ligula.
            Cras condimentum suscipit mattis.
            Ut dignissim ligula ut massa fermentum, vel eleifend purus consequat.
            Duis eleifend odio at nisl placerat, vitae iaculis elit porta.
            Sed aliquam dolor non turpis ornare, quis ultrices leo lacinia.
            Nunc blandit augue leo, sed faucibus felis malesuada feugiat.
            Sed ut urna eget nunc efficitur commodo.
        </Description>
    </div>
);
NotCroppedDescription.parameters =  { docs: { description: { story:  'A Description can have the cropping disabled.' } } };
