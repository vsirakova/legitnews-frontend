import React from 'react'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Search from 'grommet/components/Search'
import Title from 'grommet/components/Title'
import Actions from 'grommet/components/icons/base/Actions';

export default class LegitHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render () {
        return (
            <Header>
                  <Title>
                    Legit News
                  </Title>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}>
                    <Search inline={true}
                      fill={true}
                      size='medium'
                      placeHolder='Search'
                      dropAlign={{"right": "right"}} />
                    <Menu icon={<Actions />}
                      dropAlign={{"right": "right"}}>
                      <Anchor href='#'
                        className='active'>
                        First
                      </Anchor>
                      <Anchor href='#'>
                        Second
                      </Anchor>
                      <Anchor href='#'>
                        Third
                      </Anchor>
                    </Menu>
                  </Box>
                </Header>
                )
    }
}