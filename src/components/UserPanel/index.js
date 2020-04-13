import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../../firebase';


export const UserPanel = () => {
    const handleSignout = () => {
        firebase.auth().signOut().then(() => console.log('signed out'))
    }


    const dropdownOptions = () => {
        return [
            {
                key: 'user',
                text: <span>Signed in as <strong>User</strong></span>,
                disabled: true
            },
            {
                key: 'avatar',
                text: <span>Change Avatar</span>,
            },
            {
                key: 'signout',
                text: <span onClick={handleSignout}>Sign Out</span>,
            }
        ]
    }
    return (
        <Grid style={{ background: '#4c3c4c', width: 'fit-content' }}>
            <Grid.Column>
                <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                    <Header inverted floated="left" as="h2">
                        <Icon name="code" />
                        <Header.Content>DevChat</Header.Content>
                    </Header>
                </Grid.Row>
                <Header inverted as="h4" style={{ padding: '0.25em' }}>
                    <Dropdown trigger={
                        <span>
                            Users
                        </span>
                    }
                        options={dropdownOptions()} />
                </Header>
            </Grid.Column>
        </Grid>
    )
};
