import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import theme from '../../utils/theme'

const styles = () => ({
    ...theme,
    commentImage: {
        maxWidth: '100',
        marginLeft: 30,
        height: 100,
        objectFit: 'cover',
        borderRadius: '50%'
    },
    commentData: {
        marginLeft: 50
    }
})

class Comments extends Component{
    render() {
        const { comments, classes } = this.props
        //console.log(this.props.comments)
        return (
            <Grid container>
                {comments.map((comment, index) => {
                    const { body, createdAt, userImage, userHandle } = comment
                    return (
                        <Fragment key={createdAt}>
                            <Grid item sm={12}>
                                <Grid container>
                                    <Grid item sm={2}>
                                        <img 
                                            src={userImage} 
                                            alt='comment' 
                                            className={classes.commentImage} 
                                        />
                                    </Grid>
                                    <Grid item sm={10}>
                                        <div className={classes.commentData}>
                                            <Typography
                                                variant='h5'
                                                component={NavLink}
                                                to={`/user/${userHandle}`}
                                                color='primary'
                                            >
                                                {userHandle}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {moment(createdAt).format('h:mm a, MMMM DD YYYY')}
                                            </Typography>
                                            <hr className={classes.invisibleSeperator} />
                                            <Typography variant='body1'>{body}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {index !== comments.length - 1 && (
                                <hr className={classes.visibleSeperator} />
                            )}
                        </Fragment>
                    )
                })}
            </Grid>
        )
    }
}

export default withStyles(styles)(Comments)