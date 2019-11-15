import _ from 'lodash'

export const searchTrackedEntityInstances = (trackedEntityInstances, keyword) => {
    return _.filter(trackedEntityInstances, (entity)=>{
        let filtered = _.filter(entity.attributes, (attribute) => {
            let found = false
            keyword.split(' ').forEach((item)=>{
                if( _.includes(attribute.value, item))
                    found = true
            })
            return found
        })

        return filtered.length > 0
    });
}

export const getValue = (collection, field, id) => {
    let obj =  _.find(collection, (item)=>{
        return item[field] === id
    });

    return obj?obj.value:""
}
