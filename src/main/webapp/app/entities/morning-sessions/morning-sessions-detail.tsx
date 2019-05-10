import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './morning-sessions.reducer';
import { IMorningSessions } from 'app/shared/model/morning-sessions.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMorningSessionsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MorningSessionsDetail extends React.Component<IMorningSessionsDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { morningSessionsEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            MorningSessions [<b>{morningSessionsEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="title">Title</span>
            </dt>
            <dd>{morningSessionsEntity.title}</dd>
            <dt>
              <span id="quote">Quote</span>
            </dt>
            <dd>{morningSessionsEntity.quote}</dd>
            <dt>
              <span id="verse">Verse</span>
            </dt>
            <dd>{morningSessionsEntity.verse}</dd>
            <dt>
              <span id="body">Body</span>
            </dt>
            <dd>{morningSessionsEntity.body}</dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>{morningSessionsEntity.createdBy}</dd>
            <dt>
              <span id="image">Image</span>
            </dt>
            <dd>
              {morningSessionsEntity.image ? (
                <div>
                  <a onClick={openFile(morningSessionsEntity.imageContentType, morningSessionsEntity.image)}>Open&nbsp;</a>
                  <span>
                    {morningSessionsEntity.imageContentType}, {byteSize(morningSessionsEntity.image)}
                  </span>
                </div>
              ) : null}
            </dd>
          </dl>
          <Button tag={Link} to="/entity/morning-sessions" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/morning-sessions/${morningSessionsEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ morningSessions }: IRootState) => ({
  morningSessionsEntity: morningSessions.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MorningSessionsDetail);
