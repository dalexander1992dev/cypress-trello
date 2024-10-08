import StatusCodeValidator from '../../../helpers/status-code-validators'
import { TestTags } from '../../../helpers/tests-tags-constants'
import { BoardsApiHelper } from '../helpers/boards-api-helper'

const boardsApiHelper = new BoardsApiHelper()
const statusCodeValidator = new StatusCodeValidator()

describe('API - Boards Test Suite',
    {},
    () => {

        afterEach(function () {
            boardsApiHelper.deleteAllBoards()
        })

        it('API - Create a Board',
        {
           tags: [ TestTags.BOARDS ]
        },
        () => {
            boardsApiHelper.createBoard().then((createRequest) => {
                console.log(createRequest.body.id)
                statusCodeValidator.http200Validations(createRequest)
            })
        }
        )

        it('API - Get a Board',
            {
               
            },
            () => {
                boardsApiHelper.createBoard().then((createRequest) => {

                boardsApiHelper.getBoardById(createRequest.body.id).then((getRequest) => {
                    console.log(getRequest.body)
                    statusCodeValidator.http200Validations(getRequest)
                })
            })
            }
        )

        it('API - Update a Board',
        {
           
        },
        () => {
            boardsApiHelper.createBoard().then((createRequest) => {
                boardsApiHelper.updateBoard(createRequest.body.id).then((updateRequest) => {
                    console.log(updateRequest.body)
                    statusCodeValidator.http200Validations(updateRequest)
                })
            })
        }
        )

        it('API - Delete a Board',
        {
           
        },
        () => {
            boardsApiHelper.createBoard().then((createRequest) => {
                boardsApiHelper.deleteBoardById(createRequest.body.id).then((deleteRequest) => {
                    console.log(deleteRequest.body)
                    statusCodeValidator.http200Validations(deleteRequest)
                })
            })
        }
    )

    }
)